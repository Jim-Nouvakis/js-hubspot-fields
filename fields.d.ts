export type Field =
  | RichTextFieldProperties
  | GroupFieldProperties
  | TextFieldProperties
  | BooleanFieldProperties
  | ChoiceFieldProperties
  | EmailAddressFieldProperties
  | FileFieldProperties
  | FormFieldProperties
  | ImageFieldProperties
  | LinkFieldProperties
  | MenuFieldProperties
  | NumberFieldProperties
  | UrlFieldProperties
  | VideoFieldProperties;

interface DefaultFieldPropertiesBase {
  label: string;
  name: string;
  default?: unknown;
  //We use defaultValue instead of default to avoid conflict with the reserved word default
  defaultValue?: undefined;
  id?: string;
  locked?: boolean;
  display_width?: "half_width" | "full_width";
  required?: boolean;
  inline_help_text?: string;
  occurrence?: {
    default: number;
    min: number;
    max: number | null;
    sorting_label_field?: string;
  };
  disabled_controls?: {
    message: string;
    rules: AdvancedRules;
  };
}

export type DefaultFieldProperties = DefaultFieldPropertiesBase &
  (
    | { visibility: VisibilityField; advanced_visibility?: never }
    | { advanced_visibility: AdvancedVisibilityField; visibility?: never }
    | {}
  );

type Operator = "NOT_EQUAL" | "EQUAL" | "EMPTY" | "NOT_EMPTY" | "MATCHES_REGEX";

interface AdvancedVisibilityField {
  visibility_rules: "ADVANCED";
  advanced_visibility: AdvancedRules;
}

interface AdvancedRules {
  boolean_operator: "AND" | "OR";
  criteria: {
    controlling_field_path: string;
    controlling_value_regex: string;
    operator: Operator;
  }[];
}

interface VisibilityField {
  controlling_field_path: string;
  controlling_value_regex: string;
  property?: string;
  operator: Operator;
}

type RichTextFeatures =
  | "colors"
  | "fonts"
  | "indents"
  | "lists"
  | "standard_emphasis"
  | "advanced_emphasis"
  | "glyphs"
  | "block"
  | "font_family"
  | "font_size"
  | "bold"
  | "italic"
  | "underline"
  | "text_color"
  | "background_color"
  | "alignment"
  | "bulleted_list"
  | "numbered_list"
  | "lineheight"
  | "outdent"
  | "indent"
  | "strikethrough"
  | "superscript"
  | "subscript"
  | "code_format"
  | "link"
  | "image"
  | "emoji"
  | "personalize"
  | "cta"
  | "embed"
  | "video"
  | "table"
  | "charmap"
  | "anchor"
  | "hr"
  | "nonbreaking_space"
  | "icon"
  | "source_code"
  | "visual_blocks";

export interface RichTextFieldProperties extends DefaultFieldProperties {
  type: "richtext";
  enabled_features: RichTextFeatures[] | unknown;
}

export interface GroupFieldProperties extends DefaultFieldProperties {
  type: "group";
  children: Field[];
  group_occurrence_meta?: {
    featured_enabled: boolean;
    featured_limit: number;
  };
  expanded: boolean;
}

export interface TextFieldProperties extends DefaultFieldProperties {
  type: "text";
  validation_regex?: "";
  allow_new_line?: boolean;
  show_emoji_picker?: boolean;
  placeholder?: string;
}

export interface BooleanFieldProperties extends DefaultFieldProperties {
  type: "boolean";
  display: "checkbox" | "toggle";
}

export interface ChoiceFieldProperties extends DefaultFieldProperties {
  type: "choice";
  multiple?: boolean;
  choices: [string | "value1", string | "label1"][];
  display?: "select" | "radio" | "checkbox";
  reordering_enabled?: boolean;
}

export interface EmailAddressFieldProperties extends DefaultFieldProperties {
  type: "email";
}

export interface FileFieldProperties extends DefaultFieldProperties {
  type: "file";
  picker: "file" | "image" | "document";
}

export interface FormFieldProperties extends DefaultFieldProperties {
  type: "form";
  default?:
    | {
        response_type: "inline" | "redirect";
        message: string;
        redirect_id: string;
        redirect_url: string;
      }
    | unknown;
  disable_inline_form_editing?: boolean;
}

export interface ImageFieldProperties extends DefaultFieldProperties {
  type: "image";
  responsive: boolean;
  show_loading: boolean;
  default?:
    | {
        size_type: "auto" | "auto_custom_max" | "exact";
        src: string;
        alt: string;
        loading: "lazy" | "eager" | "disabled";
      }
    | unknown;
}

export interface LinkFieldProperties extends DefaultFieldProperties {
  type: "link";
  supported_types: SupportedTypes[];
}

type SupportedTypes =
  | "EXTERNAL"
  | "CONTENT"
  | "FILE"
  | "EMAIL_ADDRESS"
  | "BLOG"
  | "CALL_TO_ACTION"
  | "PHONE_NUMBER"
  | "WHATSAPP_NUMBER"
  | "PAYMENT";

export interface MenuFieldProperties extends DefaultFieldProperties {
  type: "menu";
}

export interface NumberFieldProperties extends DefaultFieldProperties {
  type: "number";
  display: "slider" | "text";
  max: number;
  min: number;
  step: number;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}

export interface TextFieldProperties extends DefaultFieldProperties {
  type: "text";
}

export interface UrlFieldProperties extends DefaultFieldProperties {
  type: "url";
  supported_types: SupportedTypes[];
  default?:
    | {
        content_id: string;
        href: string;
        type: SupportedTypes;
      }
    | unknown;
}

export interface VideoFieldProperties extends DefaultFieldProperties {
  type: "videoplayer";
  show_advanced_options: boolean;
  conversion_asset?: ConversionAsset;
  default?:
    | {
        player_id?: string;
        height?: number;
        width?: number;
        size_type?: "auto" | "auto_custom_max" | "exact";
        conversion_asse?: ConversionAsset;
        loop_video?: boolean;
        mute_by_default?: boolean;
        autoplay?: boolean;
        hide_control?: boolean;
      }
    | unknown;
}

type ConversionAsset = {
  type: "FORM" | "CTA" | "";
  id: string;
  position: "PRE" | "POST";
};
