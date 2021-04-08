import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from "next-sanity";
import sanityConfig from "./sanityConfig";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig
);
