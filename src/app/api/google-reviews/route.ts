import { NextResponse } from "next/server";

import { googlePlaceId } from "../../siteConfig";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Google Places API key not configured" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${googlePlaceId}?languageCode=en`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "id,rating,userRatingCount,reviews.text,reviews.rating,reviews.authorAttribution,reviews.relativePublishTimeDescription,reviews.publishTime,reviews.googleMapsUri,reviews.originalText",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      return NextResponse.json(
        { error: error?.message || "Failed to fetch reviews from Google" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json({
      placeId: data.id,
      rating: data.rating,
      reviewCount: data.userRatingCount,
      reviews: data.reviews?.map((review: Record<string, unknown>) => ({
        text: (review.text as Record<string, string>)?.text ?? "",
        originalText:
          (review.originalText as Record<string, string>)?.text ??
          (review.text as Record<string, string>)?.text ??
          "",
        rating: review.rating as number,
        authorName:
          (review.authorAttribution as Record<string, string>)?.displayName ??
          "Anonymous",
        authorUri:
          (review.authorAttribution as Record<string, string>)?.uri ?? "",
        authorPhotoUri:
          (review.authorAttribution as Record<string, string>)?.photoUri ?? "",
        relativeTime: (review.relativePublishTimeDescription as string) ?? "",
        publishTime: (review.publishTime as string) ?? "",
        googleMapsUri: (review.googleMapsUri as string) ?? "",
      })) ?? [],
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error fetching reviews" },
      { status: 500 },
    );
  }
}
