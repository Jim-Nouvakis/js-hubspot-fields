import {
    BooleanFieldProperties,
    ChoiceFieldProperties,
    DefaultFieldProperties,
    EmailAddressFieldProperties,
    Field,
    FileFieldProperties,
    FormFieldProperties,
    GroupFieldProperties,
    ImageFieldProperties,
    LinkFieldProperties,
    MenuFieldProperties,
    NumberFieldProperties,
    RichTextFieldProperties,
    TextFieldProperties,
    UrlFieldProperties,
    VideoFieldProperties,
} from "./fields.js";

const defaultProperties = (customValues: DefaultFieldProperties) => {
    return {
        ...customValues,
    };
};

export const richTextField = (
    extraProperties: DefaultFieldProperties,
    enabled_features = [
        "font_size",
        "standard_emphasis",
        "block",
        "font_family",
        "alignment",
    ] as RichTextFieldProperties["enabled_features"],
): RichTextFieldProperties => {
    return {
        type: "richtext",
        ...defaultProperties({ ...extraProperties }),
        enabled_features,
    };
};

export const groupField = (
    extraProperties: DefaultFieldProperties,
    children: Field[],
    expanded = false,
): GroupFieldProperties => {
    return {
        type: "group",
        ...defaultProperties({ ...extraProperties }),
        children: children,
        expanded: expanded,
    };
};

export const textField = (
    extraProperties: DefaultFieldProperties,
): TextFieldProperties => {
    return {
        type: "text",
        ...defaultProperties({ ...extraProperties }),
    };
};

export const booleanField = (
    extraProperties: DefaultFieldProperties,
    display: BooleanFieldProperties["display"],
): BooleanFieldProperties => {
    return {
        type: "boolean",
        ...defaultProperties({ ...extraProperties }),
        display,
    };
};

export const choiceField = (
    extraProperties: DefaultFieldProperties,
    choices: ChoiceFieldProperties["choices"],
    display: ChoiceFieldProperties["display"],
    multiple = false,
): ChoiceFieldProperties => {
    return {
        type: "choice",
        ...defaultProperties({ ...extraProperties }),
        choices,
        display: display,
        multiple,
    };
};

export const emailAddressField = (
    extraProperties: DefaultFieldProperties,
): EmailAddressFieldProperties => {
    return {
        type: "email",
        ...defaultProperties({ ...extraProperties }),
    };
};

export const fileField = (
    extraProperties: DefaultFieldProperties,
    picker: FileFieldProperties["picker"],
): FileFieldProperties => {
    return {
        type: "file",
        ...defaultProperties({ ...extraProperties }),
        picker,
    };
};

export const imageField = (
    extraProperties: DefaultFieldProperties,
    responsive = true,
    show_loading = false,
): ImageFieldProperties => {
    return {
        type: "image",
        ...defaultProperties({ ...extraProperties }),
        responsive,
        show_loading,
    };
};

export const linkField = (
    extraProperties: DefaultFieldProperties,
    supported_types: LinkFieldProperties["supported_types"] = [
        "BLOG",
        "CONTENT",
        "EMAIL_ADDRESS",
        "EXTERNAL",
        "FILE",
    ],
): LinkFieldProperties => {
    return {
        type: "link",
        ...defaultProperties({ ...extraProperties }),
        supported_types,
    };
};

export const menuField = (
    extraProperties: DefaultFieldProperties,
): MenuFieldProperties => {
    return {
        type: "menu",
        ...defaultProperties({ ...extraProperties }),
    };
};

export const numberField = (
    extraProperties: DefaultFieldProperties,
    min: NumberFieldProperties["min"],
    max: NumberFieldProperties["max"],
    step: NumberFieldProperties["step"],
    display: NumberFieldProperties["display"] = "text",
    prefix?: NumberFieldProperties["prefix"],
    suffix?: NumberFieldProperties["suffix"],
    placeholder?: NumberFieldProperties["placeholder"],
): NumberFieldProperties => {
    return {
        type: "number",
        ...defaultProperties({ ...extraProperties }),
        min,
        max,
        display,
        step,
        prefix,
        suffix,
        placeholder,
    };
};

export const urlField = (
    extraProperties: DefaultFieldProperties,
    supported_types: UrlFieldProperties["supported_types"] = [
        "BLOG",
        "CONTENT",
        "EMAIL_ADDRESS",
        "EXTERNAL",
        "FILE",
    ],
): UrlFieldProperties => {
    return {
        type: "url",
        ...defaultProperties({ ...extraProperties }),
        supported_types,
    };
};

export const videoField = (
    extraProperties: DefaultFieldProperties,
    show_advanced_options: VideoFieldProperties["show_advanced_options"] = false,
    conversion_asset?: VideoFieldProperties["conversion_asset"],
): VideoFieldProperties => {
    return {
        type: "videoplayer",
        ...defaultProperties({ ...extraProperties }),
        show_advanced_options,
        conversion_asset,
    };
};

export const formField = (
    extraProperties: DefaultFieldProperties,
    disable_inline_form_editing: boolean = false,
): FormFieldProperties => {
    return {
        type: "form",
        ...defaultProperties({ ...extraProperties }),
        disable_inline_form_editing,
    };
};

export default {
    richTextField,
    groupField,
    textField,
    booleanField,
    choiceField,
    emailAddressField,
    fileField,
    imageField,
    linkField,
    menuField,
    numberField,
    urlField,
    videoField,
    formField,
};
