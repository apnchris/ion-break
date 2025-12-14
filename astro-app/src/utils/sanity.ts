import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getTastes(): Promise<Taste[]> {
  return await sanityClient.fetch(
    groq`*[_type == "taste" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getTaste(slug: string): Promise<Taste> {
  return await sanityClient.fetch(
    groq`*[_type == "taste" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getBackgroundVideo(): Promise<BackgroundVideo | null> {
  return await sanityClient.fetch(
    groq`*[_type == "video"][0]{
      "posterImage": posterImageShortClip.asset->url,
      "videoFile": shortClipFile.asset->url,
      "videoUrl": shortClipUrl
    }`
  );
}

export async function getFullVideo(): Promise<FullVideo | null> {
  return await sanityClient.fetch(
    groq`*[_type == "video"][0]{
      "posterImage": posterImageFullVideo.asset->url,
      "videoFile": fullVideoFile.asset->url,
      "videoUrl": fullVideoUrl
    }`
  );
}

export interface BackgroundVideo {
  posterImage?: string;
  videoFile?: string;
  videoUrl?: string;
}

export interface FullVideo {
  posterImage?: string;
  videoFile?: string;
  videoUrl?: string;
}

export interface Taste {
  _type: "taste";
  _createdAt: string;
  title?: string;
  slug: Slug;
  description?: string;
  mainImage?: ImageAsset & { alt?: string };
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset & { alt?: string };
  body: PortableTextBlock[];
}
