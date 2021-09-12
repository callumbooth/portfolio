export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: "Aggregate";
  count: Scalars["Int"];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: "Asset";
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** The file handle */
  handle: Scalars["String"];
  /** The file name */
  fileName: Scalars["String"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>;
  /** The file width */
  width?: Maybe<Scalars["Float"]>;
  /** The file size */
  size?: Maybe<Scalars["Float"]>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  seoImage: Array<Seo>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"];
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars["Boolean"];
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetSeoImageArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: "AssetConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  seoImage?: Maybe<SeoCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  handle: Scalars["String"];
  fileName: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: "AssetEdge";
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  seoImage_every?: Maybe<SeoWhereInput>;
  seoImage_some?: Maybe<SeoWhereInput>;
  seoImage_none?: Maybe<SeoWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC"
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  seoImage?: Maybe<SeoUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  handle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars["Float"]>;
  size?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars["String"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  seoImage_every?: Maybe<SeoWhereInput>;
  seoImage_some?: Maybe<SeoWhereInput>;
  seoImage_none?: Maybe<SeoWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: "Color";
  hex: Scalars["Hex"];
  rgba: Rgba;
  css: Scalars["String"];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars["Hex"]>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: Maybe<Scalars["ID"]>;
  /** Connect document at first position */
  start?: Maybe<Scalars["Boolean"]>;
  /** Connect document at last position */
  end?: Maybe<Scalars["Boolean"]>;
};

export enum DocumentFileTypes {
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Png = "png",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Docx = "docx",
  Pdf = "pdf",
  Html = "html",
  Doc = "doc",
  Xlsx = "xlsx",
  Xls = "xls",
  Pptx = "pptx",
  Ppt = "ppt"
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: "DocumentVersion";
  id: Scalars["ID"];
  stage: Stage;
  revision: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["Json"]>;
};

export type Employment = Node & {
  __typename?: "Employment";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Employment>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  company: Scalars["String"];
  jobTitle: Scalars["String"];
  startDate: Scalars["Date"];
  endDate?: Maybe<Scalars["Date"]>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** List of Employment versions */
  history: Array<Version>;
};

export type EmploymentDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

export type EmploymentCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type EmploymentUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type EmploymentPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type EmploymentHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type EmploymentConnectInput = {
  /** Document to connect */
  where: EmploymentWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type EmploymentConnection = {
  __typename?: "EmploymentConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EmploymentEdge>;
  aggregate: Aggregate;
};

export type EmploymentCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  company: Scalars["String"];
  jobTitle: Scalars["String"];
  startDate: Scalars["Date"];
  endDate?: Maybe<Scalars["Date"]>;
};

export type EmploymentCreateManyInlineInput = {
  /** Create and connect multiple existing Employment documents */
  create?: Maybe<Array<EmploymentCreateInput>>;
  /** Connect multiple existing Employment documents */
  connect?: Maybe<Array<EmploymentWhereUniqueInput>>;
};

export type EmploymentCreateOneInlineInput = {
  /** Create and connect one Employment document */
  create?: Maybe<EmploymentCreateInput>;
  /** Connect one existing Employment document */
  connect?: Maybe<EmploymentWhereUniqueInput>;
};

/** An edge in a connection. */
export type EmploymentEdge = {
  __typename?: "EmploymentEdge";
  /** The item at the end of the edge. */
  node: Employment;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** Identifies documents */
export type EmploymentManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmploymentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmploymentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmploymentWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  company?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  company_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  company_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  company_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  company_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  company_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  company_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  company_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  company_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  company_not_ends_with?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  jobTitle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  jobTitle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  jobTitle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  jobTitle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  jobTitle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  jobTitle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  jobTitle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  jobTitle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  jobTitle_not_ends_with?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars["Date"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

export enum EmploymentOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  CompanyAsc = "company_ASC",
  CompanyDesc = "company_DESC",
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  StartDateAsc = "startDate_ASC",
  StartDateDesc = "startDate_DESC",
  EndDateAsc = "endDate_ASC",
  EndDateDesc = "endDate_DESC"
}

export type EmploymentUpdateInput = {
  company?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
};

export type EmploymentUpdateManyInlineInput = {
  /** Create and connect multiple Employment documents */
  create?: Maybe<Array<EmploymentCreateInput>>;
  /** Connect multiple existing Employment documents */
  connect?: Maybe<Array<EmploymentConnectInput>>;
  /** Override currently-connected documents with multiple existing Employment documents */
  set?: Maybe<Array<EmploymentWhereUniqueInput>>;
  /** Update multiple Employment documents */
  update?: Maybe<Array<EmploymentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Employment documents */
  upsert?: Maybe<Array<EmploymentUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Employment documents */
  disconnect?: Maybe<Array<EmploymentWhereUniqueInput>>;
  /** Delete multiple Employment documents */
  delete?: Maybe<Array<EmploymentWhereUniqueInput>>;
};

export type EmploymentUpdateManyInput = {
  company?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
};

export type EmploymentUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EmploymentWhereInput;
  /** Update many input */
  data: EmploymentUpdateManyInput;
};

export type EmploymentUpdateOneInlineInput = {
  /** Create and connect one Employment document */
  create?: Maybe<EmploymentCreateInput>;
  /** Update single Employment document */
  update?: Maybe<EmploymentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Employment document */
  upsert?: Maybe<EmploymentUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Employment document */
  connect?: Maybe<EmploymentWhereUniqueInput>;
  /** Disconnect currently connected Employment document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Employment document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type EmploymentUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmploymentWhereUniqueInput;
  /** Document to update */
  data: EmploymentUpdateInput;
};

export type EmploymentUpsertInput = {
  /** Create document if it didn't exist */
  create: EmploymentCreateInput;
  /** Update document if it exists */
  update: EmploymentUpdateInput;
};

export type EmploymentUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EmploymentWhereUniqueInput;
  /** Upsert data */
  data: EmploymentUpsertInput;
};

/** Identifies documents */
export type EmploymentWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EmploymentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EmploymentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EmploymentWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  company?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  company_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  company_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  company_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  company_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  company_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  company_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  company_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  company_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  company_not_ends_with?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  jobTitle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  jobTitle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  jobTitle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  jobTitle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  jobTitle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  jobTitle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  jobTitle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  jobTitle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  jobTitle_not_ends_with?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  startDate_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  startDate_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  startDate_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  startDate_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  startDate_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  startDate_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  startDate_gte?: Maybe<Scalars["Date"]>;
  endDate?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  endDate_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  endDate_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  endDate_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  endDate_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  endDate_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  endDate_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  endDate_gte?: Maybe<Scalars["Date"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
};

/** References Employment record uniquely */
export type EmploymentWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max"
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars["Int"]>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars["Int"]>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = "en"
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: "Location";
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  distance: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type Mutation = {
  __typename?: "Mutation";
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Create one seo */
  createSeo?: Maybe<Seo>;
  /** Update one seo */
  updateSeo?: Maybe<Seo>;
  /** Delete one seo from _all_ existing stages. Returns deleted document. */
  deleteSeo?: Maybe<Seo>;
  /** Upsert one seo */
  upsertSeo?: Maybe<Seo>;
  /** Publish one seo */
  publishSeo?: Maybe<Seo>;
  /** Unpublish one seo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSeo?: Maybe<Seo>;
  /** Update many Seo documents */
  updateManySeosConnection: SeoConnection;
  /** Delete many Seo documents, return deleted documents */
  deleteManySeosConnection: SeoConnection;
  /** Publish many Seo documents */
  publishManySeosConnection: SeoConnection;
  /** Find many Seo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySeosConnection: SeoConnection;
  /**
   * Update many seos
   * @deprecated Please use the new paginated many mutation (updateManySeosConnection)
   */
  updateManySeos: BatchPayload;
  /**
   * Delete many Seo documents
   * @deprecated Please use the new paginated many mutation (deleteManySeosConnection)
   */
  deleteManySeos: BatchPayload;
  /**
   * Publish many Seo documents
   * @deprecated Please use the new paginated many mutation (publishManySeosConnection)
   */
  publishManySeos: BatchPayload;
  /**
   * Unpublish many Seo documents
   * @deprecated Please use the new paginated many mutation (unpublishManySeosConnection)
   */
  unpublishManySeos: BatchPayload;
  /** Create one project */
  createProject?: Maybe<Project>;
  /** Update one project */
  updateProject?: Maybe<Project>;
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>;
  /** Upsert one project */
  upsertProject?: Maybe<Project>;
  /** Publish one project */
  publishProject?: Maybe<Project>;
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>;
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection;
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection;
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection;
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection;
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload;
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload;
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload;
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload;
  /** Create one employment */
  createEmployment?: Maybe<Employment>;
  /** Update one employment */
  updateEmployment?: Maybe<Employment>;
  /** Delete one employment from _all_ existing stages. Returns deleted document. */
  deleteEmployment?: Maybe<Employment>;
  /** Upsert one employment */
  upsertEmployment?: Maybe<Employment>;
  /** Publish one employment */
  publishEmployment?: Maybe<Employment>;
  /** Unpublish one employment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEmployment?: Maybe<Employment>;
  /** Update many Employment documents */
  updateManyEmploymentsConnection: EmploymentConnection;
  /** Delete many Employment documents, return deleted documents */
  deleteManyEmploymentsConnection: EmploymentConnection;
  /** Publish many Employment documents */
  publishManyEmploymentsConnection: EmploymentConnection;
  /** Find many Employment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEmploymentsConnection: EmploymentConnection;
  /**
   * Update many employments
   * @deprecated Please use the new paginated many mutation (updateManyEmploymentsConnection)
   */
  updateManyEmployments: BatchPayload;
  /**
   * Delete many Employment documents
   * @deprecated Please use the new paginated many mutation (deleteManyEmploymentsConnection)
   */
  deleteManyEmployments: BatchPayload;
  /**
   * Publish many Employment documents
   * @deprecated Please use the new paginated many mutation (publishManyEmploymentsConnection)
   */
  publishManyEmployments: BatchPayload;
  /**
   * Unpublish many Employment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEmploymentsConnection)
   */
  unpublishManyEmployments: BatchPayload;
  /** Create one person */
  createPerson?: Maybe<Person>;
  /** Update one person */
  updatePerson?: Maybe<Person>;
  /** Delete one person from _all_ existing stages. Returns deleted document. */
  deletePerson?: Maybe<Person>;
  /** Upsert one person */
  upsertPerson?: Maybe<Person>;
  /** Publish one person */
  publishPerson?: Maybe<Person>;
  /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPerson?: Maybe<Person>;
  /** Update many Person documents */
  updateManyPeopleConnection: PersonConnection;
  /** Delete many Person documents, return deleted documents */
  deleteManyPeopleConnection: PersonConnection;
  /** Publish many Person documents */
  publishManyPeopleConnection: PersonConnection;
  /** Find many Person documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPeopleConnection: PersonConnection;
  /**
   * Update many people
   * @deprecated Please use the new paginated many mutation (updateManyPeopleConnection)
   */
  updateManyPeople: BatchPayload;
  /**
   * Delete many Person documents
   * @deprecated Please use the new paginated many mutation (deleteManyPeopleConnection)
   */
  deleteManyPeople: BatchPayload;
  /**
   * Publish many Person documents
   * @deprecated Please use the new paginated many mutation (publishManyPeopleConnection)
   */
  publishManyPeople: BatchPayload;
  /**
   * Unpublish many Person documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPeopleConnection)
   */
  unpublishManyPeople: BatchPayload;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};

export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
};

export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
};

export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
};

export type MutationCreatePageArgs = {
  data: PageCreateInput;
};

export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput;
  data: PageUpdateInput;
};

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};

export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput;
  upsert: PageUpsertInput;
};

export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationPublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUnpublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
};

export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};

export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateSeoArgs = {
  data: SeoCreateInput;
};

export type MutationUpdateSeoArgs = {
  where: SeoWhereUniqueInput;
  data: SeoUpdateInput;
};

export type MutationDeleteSeoArgs = {
  where: SeoWhereUniqueInput;
};

export type MutationUpsertSeoArgs = {
  where: SeoWhereUniqueInput;
  upsert: SeoUpsertInput;
};

export type MutationPublishSeoArgs = {
  where: SeoWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishSeoArgs = {
  where: SeoWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  data: SeoUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationPublishManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUnpublishManySeosConnectionArgs = {
  where?: Maybe<SeoManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUpdateManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  data: SeoUpdateManyInput;
};

export type MutationDeleteManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
};

export type MutationPublishManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManySeosArgs = {
  where?: Maybe<SeoManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationUpdateProjectArgs = {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateInput;
};

export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type MutationUpsertProjectArgs = {
  where: ProjectWhereUniqueInput;
  upsert: ProjectUpsertInput;
};

export type MutationPublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishProjectArgs = {
  where: ProjectWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationPublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUnpublishManyProjectsConnectionArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUpdateManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  data: ProjectUpdateManyInput;
};

export type MutationDeleteManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
};

export type MutationPublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyProjectsArgs = {
  where?: Maybe<ProjectManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreateEmploymentArgs = {
  data: EmploymentCreateInput;
};

export type MutationUpdateEmploymentArgs = {
  where: EmploymentWhereUniqueInput;
  data: EmploymentUpdateInput;
};

export type MutationDeleteEmploymentArgs = {
  where: EmploymentWhereUniqueInput;
};

export type MutationUpsertEmploymentArgs = {
  where: EmploymentWhereUniqueInput;
  upsert: EmploymentUpsertInput;
};

export type MutationPublishEmploymentArgs = {
  where: EmploymentWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishEmploymentArgs = {
  where: EmploymentWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyEmploymentsConnectionArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
  data: EmploymentUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteManyEmploymentsConnectionArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationPublishManyEmploymentsConnectionArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUnpublishManyEmploymentsConnectionArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUpdateManyEmploymentsArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
  data: EmploymentUpdateManyInput;
};

export type MutationDeleteManyEmploymentsArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
};

export type MutationPublishManyEmploymentsArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyEmploymentsArgs = {
  where?: Maybe<EmploymentManyWhereInput>;
  from?: Array<Stage>;
};

export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};

export type MutationUpdatePersonArgs = {
  where: PersonWhereUniqueInput;
  data: PersonUpdateInput;
};

export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};

export type MutationUpsertPersonArgs = {
  where: PersonWhereUniqueInput;
  upsert: PersonUpsertInput;
};

export type MutationPublishPersonArgs = {
  where: PersonWhereUniqueInput;
  to?: Array<Stage>;
};

export type MutationUnpublishPersonArgs = {
  where: PersonWhereUniqueInput;
  from?: Array<Stage>;
};

export type MutationUpdateManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  data: PersonUpdateManyInput;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationDeleteManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationPublishManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUnpublishManyPeopleConnectionArgs = {
  where?: Maybe<PersonManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars["Int"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  before?: Maybe<Scalars["ID"]>;
  after?: Maybe<Scalars["ID"]>;
};

export type MutationUpdateManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
  data: PersonUpdateManyInput;
};

export type MutationDeleteManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
};

export type MutationPublishManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
  to?: Array<Stage>;
};

export type MutationUnpublishManyPeopleArgs = {
  where?: Maybe<PersonManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: "Page";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** What is the title of your page? */
  title: Scalars["String"];
  /** Enter the slug for this page, such as about, blog, or contact */
  slug: Scalars["String"];
  /** Enter a short description to be used as a subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Enter the content for this page. The content uses the rich-text editor, giving you a better visual representation. */
  body: PageBodyRichText;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  seo?: Maybe<Seo>;
  /** List of Page versions */
  history: Array<Version>;
};

export type PageDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

export type PageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageSeoArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type PageBodyRichText = {
  __typename?: "PageBodyRichText";
  /** @deprecated Please use the 'json' field */
  raw: Scalars["RichTextAST"];
  json: Scalars["RichTextAST"];
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
  references: Array<PageBodyRichTextEmbeddedTypes>;
};

export type PageBodyRichTextEmbeddedTypes = Asset;

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: "PageConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageEdge>;
  aggregate: Aggregate;
};

export type PageCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  slug: Scalars["String"];
  subtitle?: Maybe<Scalars["String"]>;
  body: Scalars["RichTextAST"];
  seo?: Maybe<SeoCreateOneInlineInput>;
};

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
};

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: "PageEdge";
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  subtitle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars["String"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  seo?: Maybe<SeoWhereInput>;
};

export enum PageOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC"
}

export type PageUpdateInput = {
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  subtitle?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["RichTextAST"]>;
  seo?: Maybe<SeoUpdateOneInlineInput>;
};

export type PageUpdateManyInlineInput = {
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  subtitle?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["RichTextAST"]>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput;
  /** Update many input */
  data: PageUpdateManyInput;
};

export type PageUpdateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Document to update */
  data: PageUpdateInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Upsert data */
  data: PageUpsertInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  subtitle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  subtitle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  subtitle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  subtitle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  subtitle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  subtitle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  subtitle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  subtitle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  subtitle_not_ends_with?: Maybe<Scalars["String"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  seo?: Maybe<SeoWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type Person = Node & {
  __typename?: "Person";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Person>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  secondName?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  /** Date of Birth */
  dob?: Maybe<Scalars["Date"]>;
  location?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  skills: Array<Skills>;
  /** List of Person versions */
  history: Array<Version>;
};

export type PersonDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

export type PersonCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PersonUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PersonPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PersonHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type PersonConnectInput = {
  /** Document to connect */
  where: PersonWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PersonConnection = {
  __typename?: "PersonConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PersonEdge>;
  aggregate: Aggregate;
};

export type PersonCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  secondName?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["Date"]>;
  location?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Skills>>;
};

export type PersonCreateManyInlineInput = {
  /** Create and connect multiple existing Person documents */
  create?: Maybe<Array<PersonCreateInput>>;
  /** Connect multiple existing Person documents */
  connect?: Maybe<Array<PersonWhereUniqueInput>>;
};

export type PersonCreateOneInlineInput = {
  /** Create and connect one Person document */
  create?: Maybe<PersonCreateInput>;
  /** Connect one existing Person document */
  connect?: Maybe<PersonWhereUniqueInput>;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: "PersonEdge";
  /** The item at the end of the edge. */
  node: Person;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** Identifies documents */
export type PersonManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars["String"]>;
  secondName?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  secondName_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  secondName_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  secondName_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  secondName_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  secondName_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  secondName_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  secondName_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  secondName_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  secondName_not_ends_with?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  jobTitle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  jobTitle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  jobTitle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  jobTitle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  jobTitle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  jobTitle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  jobTitle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  jobTitle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  jobTitle_not_ends_with?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  dob_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  dob_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  dob_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  dob_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  dob_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  dob_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  dob_gte?: Maybe<Scalars["Date"]>;
  location?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars["String"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  skills?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  skills_not?: Maybe<Array<Skills>>;
  /** Matches if the field array contains *all* items provided to the filter */
  skills_contains_all?: Maybe<Array<Skills>>;
  /** Matches if the field array contains at least one item provided to the filter */
  skills_contains_some?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  skills_contains_none?: Maybe<Array<Skills>>;
};

export enum PersonOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  FirstNameAsc = "firstName_ASC",
  FirstNameDesc = "firstName_DESC",
  SecondNameAsc = "secondName_ASC",
  SecondNameDesc = "secondName_DESC",
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  DobAsc = "dob_ASC",
  DobDesc = "dob_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  SkillsAsc = "skills_ASC",
  SkillsDesc = "skills_DESC"
}

export type PersonUpdateInput = {
  firstName?: Maybe<Scalars["String"]>;
  secondName?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["Date"]>;
  location?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Skills>>;
};

export type PersonUpdateManyInlineInput = {
  /** Create and connect multiple Person documents */
  create?: Maybe<Array<PersonCreateInput>>;
  /** Connect multiple existing Person documents */
  connect?: Maybe<Array<PersonConnectInput>>;
  /** Override currently-connected documents with multiple existing Person documents */
  set?: Maybe<Array<PersonWhereUniqueInput>>;
  /** Update multiple Person documents */
  update?: Maybe<Array<PersonUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Person documents */
  upsert?: Maybe<Array<PersonUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Person documents */
  disconnect?: Maybe<Array<PersonWhereUniqueInput>>;
  /** Delete multiple Person documents */
  delete?: Maybe<Array<PersonWhereUniqueInput>>;
};

export type PersonUpdateManyInput = {
  firstName?: Maybe<Scalars["String"]>;
  secondName?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["Date"]>;
  location?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Skills>>;
};

export type PersonUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PersonWhereInput;
  /** Update many input */
  data: PersonUpdateManyInput;
};

export type PersonUpdateOneInlineInput = {
  /** Create and connect one Person document */
  create?: Maybe<PersonCreateInput>;
  /** Update single Person document */
  update?: Maybe<PersonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Person document */
  upsert?: Maybe<PersonUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Person document */
  connect?: Maybe<PersonWhereUniqueInput>;
  /** Disconnect currently connected Person document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Person document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PersonWhereUniqueInput;
  /** Document to update */
  data: PersonUpdateInput;
};

export type PersonUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonCreateInput;
  /** Update document if it exists */
  update: PersonUpdateInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PersonWhereUniqueInput;
  /** Upsert data */
  data: PersonUpsertInput;
};

/** Identifies documents */
export type PersonWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PersonWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  firstName_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  firstName_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  firstName_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  firstName_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  firstName_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  firstName_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  firstName_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: Maybe<Scalars["String"]>;
  secondName?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  secondName_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  secondName_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  secondName_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  secondName_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  secondName_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  secondName_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  secondName_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  secondName_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  secondName_not_ends_with?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  jobTitle_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  jobTitle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  jobTitle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  jobTitle_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  jobTitle_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  jobTitle_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  jobTitle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  jobTitle_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  jobTitle_not_ends_with?: Maybe<Scalars["String"]>;
  dob?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  dob_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  dob_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  dob_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  dob_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  dob_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  dob_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  dob_gte?: Maybe<Scalars["Date"]>;
  location?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  location_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  location_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  location_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  location_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  location_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  location_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  location_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  location_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  location_not_ends_with?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: Maybe<Scalars["String"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  skills?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  skills_not?: Maybe<Array<Skills>>;
  /** Matches if the field array contains *all* items provided to the filter */
  skills_contains_all?: Maybe<Array<Skills>>;
  /** Matches if the field array contains at least one item provided to the filter */
  skills_contains_some?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  skills_contains_none?: Maybe<Array<Skills>>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

/** A list of projects */
export type Project = Node & {
  __typename?: "Project";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Project>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  /** project slug */
  slug: Scalars["String"];
  featured?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  launchDate?: Maybe<Scalars["Date"]>;
  /** Github Repo url for the project */
  githubRepo?: Maybe<Scalars["String"]>;
  body: ProjectBodyRichText;
  summary?: Maybe<Scalars["String"]>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  skills: Array<Skills>;
  /** List of Project versions */
  history: Array<Version>;
};

/** A list of projects */
export type ProjectDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

/** A list of projects */
export type ProjectCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** A list of projects */
export type ProjectUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** A list of projects */
export type ProjectPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** A list of projects */
export type ProjectHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type ProjectBodyRichText = {
  __typename?: "ProjectBodyRichText";
  /** @deprecated Please use the 'json' field */
  raw: Scalars["RichTextAST"];
  json: Scalars["RichTextAST"];
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
  references: Array<ProjectBodyRichTextEmbeddedTypes>;
};

export type ProjectBodyRichTextEmbeddedTypes = Asset;

export type ProjectConnectInput = {
  /** Document to connect */
  where: ProjectWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: "ProjectConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ProjectEdge>;
  aggregate: Aggregate;
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  slug: Scalars["String"];
  featured?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  launchDate?: Maybe<Scalars["Date"]>;
  githubRepo?: Maybe<Scalars["String"]>;
  body: Scalars["RichTextAST"];
  summary?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Skills>>;
};

export type ProjectCreateManyInlineInput = {
  /** Create and connect multiple existing Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectCreateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Connect one existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: "ProjectEdge";
  /** The item at the end of the edge. */
  node: Project;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  featured_not?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  rotation_not?: Maybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  rotation_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values that are not contained in given list. */
  rotation_not_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values less than the given value. */
  rotation_lt?: Maybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  rotation_lte?: Maybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  rotation_gt?: Maybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  rotation_gte?: Maybe<Scalars["Int"]>;
  launchDate?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  launchDate_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  launchDate_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  launchDate_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  launchDate_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  launchDate_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  launchDate_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  launchDate_gte?: Maybe<Scalars["Date"]>;
  githubRepo?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  githubRepo_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  githubRepo_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  githubRepo_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  githubRepo_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  githubRepo_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  githubRepo_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  githubRepo_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  githubRepo_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  githubRepo_not_ends_with?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  summary_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  summary_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  summary_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  summary_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  summary_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  summary_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  summary_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  summary_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  summary_not_ends_with?: Maybe<Scalars["String"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  skills?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  skills_not?: Maybe<Array<Skills>>;
  /** Matches if the field array contains *all* items provided to the filter */
  skills_contains_all?: Maybe<Array<Skills>>;
  /** Matches if the field array contains at least one item provided to the filter */
  skills_contains_some?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  skills_contains_none?: Maybe<Array<Skills>>;
};

export enum ProjectOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  FeaturedAsc = "featured_ASC",
  FeaturedDesc = "featured_DESC",
  RotationAsc = "rotation_ASC",
  RotationDesc = "rotation_DESC",
  LaunchDateAsc = "launchDate_ASC",
  LaunchDateDesc = "launchDate_DESC",
  GithubRepoAsc = "githubRepo_ASC",
  GithubRepoDesc = "githubRepo_DESC",
  SummaryAsc = "summary_ASC",
  SummaryDesc = "summary_DESC",
  SkillsAsc = "skills_ASC",
  SkillsDesc = "skills_DESC"
}

export type ProjectUpdateInput = {
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  launchDate?: Maybe<Scalars["Date"]>;
  githubRepo?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["RichTextAST"]>;
  summary?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Skills>>;
};

export type ProjectUpdateManyInlineInput = {
  /** Create and connect multiple Project documents */
  create?: Maybe<Array<ProjectCreateInput>>;
  /** Connect multiple existing Project documents */
  connect?: Maybe<Array<ProjectConnectInput>>;
  /** Override currently-connected documents with multiple existing Project documents */
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Update multiple Project documents */
  update?: Maybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Project documents */
  upsert?: Maybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Project documents */
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  /** Delete multiple Project documents */
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectUpdateManyInput = {
  featured?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  launchDate?: Maybe<Scalars["Date"]>;
  githubRepo?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["RichTextAST"]>;
  summary?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Skills>>;
};

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ProjectWhereInput;
  /** Update many input */
  data: ProjectUpdateManyInput;
};

export type ProjectUpdateOneInlineInput = {
  /** Create and connect one Project document */
  create?: Maybe<ProjectCreateInput>;
  /** Update single Project document */
  update?: Maybe<ProjectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Project document */
  upsert?: Maybe<ProjectUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Project document */
  connect?: Maybe<ProjectWhereUniqueInput>;
  /** Disconnect currently connected Project document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Project document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Document to update */
  data: ProjectUpdateInput;
};

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput;
  /** Update document if it exists */
  update: ProjectUpdateInput;
};

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ProjectWhereUniqueInput;
  /** Upsert data */
  data: ProjectUpsertInput;
};

/** Identifies documents */
export type ProjectWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  featured_not?: Maybe<Scalars["Boolean"]>;
  rotation?: Maybe<Scalars["Int"]>;
  /** All values that are not equal to given value. */
  rotation_not?: Maybe<Scalars["Int"]>;
  /** All values that are contained in given list. */
  rotation_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values that are not contained in given list. */
  rotation_not_in?: Maybe<Array<Scalars["Int"]>>;
  /** All values less than the given value. */
  rotation_lt?: Maybe<Scalars["Int"]>;
  /** All values less than or equal the given value. */
  rotation_lte?: Maybe<Scalars["Int"]>;
  /** All values greater than the given value. */
  rotation_gt?: Maybe<Scalars["Int"]>;
  /** All values greater than or equal the given value. */
  rotation_gte?: Maybe<Scalars["Int"]>;
  launchDate?: Maybe<Scalars["Date"]>;
  /** All values that are not equal to given value. */
  launchDate_not?: Maybe<Scalars["Date"]>;
  /** All values that are contained in given list. */
  launchDate_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values that are not contained in given list. */
  launchDate_not_in?: Maybe<Array<Scalars["Date"]>>;
  /** All values less than the given value. */
  launchDate_lt?: Maybe<Scalars["Date"]>;
  /** All values less than or equal the given value. */
  launchDate_lte?: Maybe<Scalars["Date"]>;
  /** All values greater than the given value. */
  launchDate_gt?: Maybe<Scalars["Date"]>;
  /** All values greater than or equal the given value. */
  launchDate_gte?: Maybe<Scalars["Date"]>;
  githubRepo?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  githubRepo_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  githubRepo_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  githubRepo_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  githubRepo_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  githubRepo_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  githubRepo_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  githubRepo_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  githubRepo_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  githubRepo_not_ends_with?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  summary_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  summary_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  summary_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  summary_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  summary_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  summary_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  summary_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  summary_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  summary_not_ends_with?: Maybe<Scalars["String"]>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  skills?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  skills_not?: Maybe<Array<Skills>>;
  /** Matches if the field array contains *all* items provided to the filter */
  skills_contains_all?: Maybe<Array<Skills>>;
  /** Matches if the field array contains at least one item provided to the filter */
  skills_contains_some?: Maybe<Array<Skills>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  skills_contains_none?: Maybe<Array<Skills>>;
};

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: "Query";
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple seos */
  seos: Array<Seo>;
  /** Retrieve a single seo */
  seo?: Maybe<Seo>;
  /** Retrieve multiple seos using the Relay connection interface */
  seosConnection: SeoConnection;
  /** Retrieve document version */
  seoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple projects */
  projects: Array<Project>;
  /** Retrieve a single project */
  project?: Maybe<Project>;
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection;
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple employments */
  employments: Array<Employment>;
  /** Retrieve a single employment */
  employment?: Maybe<Employment>;
  /** Retrieve multiple employments using the Relay connection interface */
  employmentsConnection: EmploymentConnection;
  /** Retrieve document version */
  employmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple people */
  people: Array<Person>;
  /** Retrieve a single person */
  person?: Maybe<Person>;
  /** Retrieve multiple people using the Relay connection interface */
  peopleConnection: PersonConnection;
  /** Retrieve document version */
  personVersion?: Maybe<DocumentVersion>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPageArgs = {
  where: PageWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};

export type QuerySeosArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySeoArgs = {
  where: SeoWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySeosConnectionArgs = {
  where?: Maybe<SeoWhereInput>;
  orderBy?: Maybe<SeoOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QuerySeoVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryProjectsConnectionArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryProjectVersionArgs = {
  where: VersionWhereInput;
};

export type QueryEmploymentsArgs = {
  where?: Maybe<EmploymentWhereInput>;
  orderBy?: Maybe<EmploymentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryEmploymentArgs = {
  where: EmploymentWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryEmploymentsConnectionArgs = {
  where?: Maybe<EmploymentWhereInput>;
  orderBy?: Maybe<EmploymentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryEmploymentVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPeopleArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPersonArgs = {
  where: PersonWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPeopleConnectionArgs = {
  where?: Maybe<PersonWhereInput>;
  orderBy?: Maybe<PersonOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  locales?: Array<Locale>;
};

export type QueryPersonVersionArgs = {
  where: VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: "RGBA";
  r: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  b: Scalars["RGBAHue"];
  a: Scalars["RGBATransparency"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  b: Scalars["RGBAHue"];
  a: Scalars["RGBATransparency"];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: "RichText";
  /** Returns AST representation */
  raw: Scalars["RichTextAST"];
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

export type Seo = Node & {
  __typename?: "Seo";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Seo>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** Create a custom meta title */
  title?: Maybe<Scalars["String"]>;
  /** Create a custom meta description */
  description?: Maybe<Scalars["String"]>;
  /** Select your focus keywords */
  keywords: Array<Scalars["String"]>;
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Select a custom OG image (the most common size is usually 1280x720) */
  image?: Maybe<Asset>;
  pages: Array<Page>;
  /** List of Seo versions */
  history: Array<Version>;
};

export type SeoDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

export type SeoCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SeoUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SeoPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SeoImageArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SeoPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
};

export type SeoHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type SeoConnectInput = {
  /** Document to connect */
  where: SeoWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type SeoConnection = {
  __typename?: "SeoConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SeoEdge>;
  aggregate: Aggregate;
};

export type SeoCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  keywords?: Maybe<Array<Scalars["String"]>>;
  image?: Maybe<AssetCreateOneInlineInput>;
  pages?: Maybe<PageCreateManyInlineInput>;
};

export type SeoCreateManyInlineInput = {
  /** Create and connect multiple existing Seo documents */
  create?: Maybe<Array<SeoCreateInput>>;
  /** Connect multiple existing Seo documents */
  connect?: Maybe<Array<SeoWhereUniqueInput>>;
};

export type SeoCreateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: Maybe<SeoCreateInput>;
  /** Connect one existing Seo document */
  connect?: Maybe<SeoWhereUniqueInput>;
};

/** An edge in a connection. */
export type SeoEdge = {
  __typename?: "SeoEdge";
  /** The item at the end of the edge. */
  node: Seo;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** Identifies documents */
export type SeoManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars["String"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: Maybe<Array<Scalars["String"]>>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
};

export enum SeoOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  KeywordsAsc = "keywords_ASC",
  KeywordsDesc = "keywords_DESC"
}

export type SeoUpdateInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  keywords?: Maybe<Array<Scalars["String"]>>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  pages?: Maybe<PageUpdateManyInlineInput>;
};

export type SeoUpdateManyInlineInput = {
  /** Create and connect multiple Seo documents */
  create?: Maybe<Array<SeoCreateInput>>;
  /** Connect multiple existing Seo documents */
  connect?: Maybe<Array<SeoConnectInput>>;
  /** Override currently-connected documents with multiple existing Seo documents */
  set?: Maybe<Array<SeoWhereUniqueInput>>;
  /** Update multiple Seo documents */
  update?: Maybe<Array<SeoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Seo documents */
  upsert?: Maybe<Array<SeoUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Seo documents */
  disconnect?: Maybe<Array<SeoWhereUniqueInput>>;
  /** Delete multiple Seo documents */
  delete?: Maybe<Array<SeoWhereUniqueInput>>;
};

export type SeoUpdateManyInput = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  keywords?: Maybe<Array<Scalars["String"]>>;
};

export type SeoUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SeoWhereInput;
  /** Update many input */
  data: SeoUpdateManyInput;
};

export type SeoUpdateOneInlineInput = {
  /** Create and connect one Seo document */
  create?: Maybe<SeoCreateInput>;
  /** Update single Seo document */
  update?: Maybe<SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Seo document */
  upsert?: Maybe<SeoUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Seo document */
  connect?: Maybe<SeoWhereUniqueInput>;
  /** Disconnect currently connected Seo document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Delete currently connected Seo document */
  delete?: Maybe<Scalars["Boolean"]>;
};

export type SeoUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SeoWhereUniqueInput;
  /** Document to update */
  data: SeoUpdateInput;
};

export type SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: SeoCreateInput;
  /** Update document if it exists */
  update: SeoUpdateInput;
};

export type SeoUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SeoWhereUniqueInput;
  /** Upsert data */
  data: SeoUpsertInput;
};

/** Identifies documents */
export type SeoWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SeoWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars["String"]>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some?: Maybe<Array<Scalars["String"]>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none?: Maybe<Array<Scalars["String"]>>;
  createdBy?: Maybe<UserWhereInput>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedBy?: Maybe<UserWhereInput>;
  image?: Maybe<AssetWhereInput>;
  pages_every?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
};

/** References Seo record uniquely */
export type SeoWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export enum Skills {
  Php = "PHP",
  Sass = "SASS",
  Js = "JS",
  Design = "Design",
  Moodle = "Moodle",
  React = "React"
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED"
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Localization = "LOCALIZATION",
  Combined = "COMBINED"
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: "User";
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** The username */
  name: Scalars["String"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]>;
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
};

/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
};

export type UserConnectInput = {
  /** Document to connect */
  where: UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: "UserConnection";
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK"
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars["String"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars["Boolean"]>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC"
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars["String"]>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars["String"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars["Boolean"]>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Version = {
  __typename?: "Version";
  id: Scalars["ID"];
  stage: Stage;
  revision: Scalars["Int"];
  createdAt: Scalars["DateTime"];
};

export type VersionWhereInput = {
  id: Scalars["ID"];
  stage: Stage;
  revision: Scalars["Int"];
};

export enum _FilterKind {
  Search = "search",
  And = "AND",
  Or = "OR",
  Not = "NOT",
  Eq = "eq",
  EqNot = "eq_not",
  In = "in",
  NotIn = "not_in",
  Lt = "lt",
  Lte = "lte",
  Gt = "gt",
  Gte = "gte",
  Contains = "contains",
  NotContains = "not_contains",
  StartsWith = "starts_with",
  NotStartsWith = "not_starts_with",
  EndsWith = "ends_with",
  NotEndsWith = "not_ends_with",
  ContainsAll = "contains_all",
  ContainsSome = "contains_some",
  ContainsNone = "contains_none",
  RelationalSingle = "relational_single",
  RelationalEvery = "relational_every",
  RelationalSome = "relational_some",
  RelationalNone = "relational_none"
}

export enum _MutationInputFieldKind {
  Scalar = "scalar",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Enum = "enum",
  Relation = "relation",
  Union = "union",
  Virtual = "virtual"
}

export enum _MutationKind {
  Create = "create",
  Publish = "publish",
  Unpublish = "unpublish",
  Update = "update",
  Upsert = "upsert",
  Delete = "delete",
  UpdateMany = "updateMany",
  PublishMany = "publishMany",
  UnpublishMany = "unpublishMany",
  DeleteMany = "deleteMany"
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc"
}

export enum _RelationInputCardinality {
  One = "one",
  Many = "many"
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update"
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union"
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Localization = "localization",
  Combined = "combined"
}
