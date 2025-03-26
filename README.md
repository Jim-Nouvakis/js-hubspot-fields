# js-hubspot-fields

A TypeScript/JavaScript package for creating HubSpot field configurations programmatically.

## Installation

```bash
bun add install js-hubspot-fields
```

## Usage

```typescript
import { textField, choiceField, groupField } from 'js-hubspot-fields';

// Create a text field
const titleField = textField({
  name: 'title',
  label: 'Title',  
});

// Create a choice field
const categoryField = choiceField(
  {
    name: 'category',
    label: 'Category'
  },
  [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' }
  ],
  'select',
  false
);

// Create a group field
const addressGroup = groupField(
  {
    name: 'address',
    label: 'Address'
  },
  [
    textField({ name: 'street', label: 'Street' }),
    textField({ name: 'city', label: 'City' }),
    textField({ name: 'zip', label: 'ZIP Code' })
  ],
  true
);
```

## Available Field Types

The package provides the following field type functions:

### Available Fields
- `richTextField(extraProperties, enabled_features?)` - Rich text editor
- `groupField(extraProperties, children, expanded?)` - Group container for other fields
- `textField(extraProperties)` - Text input field
- `booleanField(extraProperties, display)` - Boolean/checkbox field
- `choiceField(extraProperties, choices, display, multiple?)` - Dropdown or radio/checkbox group
- `emailAddressField(extraProperties)` - Email input field
- `fileField(extraProperties, picker)` - File upload/selection
- `imageField(extraProperties, responsive?, show_loading?)` - Image upload/selection
- `linkField(extraProperties, supported_types?)` - Link selection
- `menuField(extraProperties)` - Menu selection field
- `numberField(extraProperties, min, max, step, display?, prefix?, suffix?, placeholder?)` - Number input field
- `urlField(extraProperties, supported_types?)` - URL input field
- `videoField(extraProperties, show_advanced_options?, conversion_asset?)` - Video player
- `formField(extraProperties, disable_inline_form_editing?)` - Form selection


## Field Properties

Each field function accepts an `extraProperties` parameter that can include the following common properties:

- `name` (required): Unique identifier for the field
- `label` (required): Display label for the field
- `default`: Default value for the field
- `id`: Optional unique identifier
- `locked`: Boolean indicating if the field is locked for editing
- `display_width`: Field width setting ("half_width" or "full_width")
- `required`: Boolean indicating if the field is required
- `inline_help_text`: Optional help text to display with the field
- `occurrence`: Controls field repetition settings (min, max, default occurrences)
- `disabled_controls`: Disables field controls based on specified rules
- `visibility`: Controls basic field visibility conditions
- `advanced_visibility`: Controls advanced field visibility rules


## Features

- TypeScript support with full type definitions
- Consistent field configuration structure
- Default values for common field properties
- Flexible customization options

## Contributing




## Build Configuration

This library requires a build step before uploading to HubSpot, as HubSpot doesn't natively support TypeScript files. Below is a sample Vite configuration that demonstrates how to set up your project:

```
export default defineConfig({
  mode: "production",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
          "modules/FlexColumns.module/fields": resolve(
          __dirname,
          "src/modules/FlexColumns.module/fields.ts",
        ),     
         },
      output: {
        format: "es",
        assetFileNames: ({ name }) =>
          name?.includes(".css")
            ? "build/css/[name][extname]"
            : "build/js/[name]-[hash][extname]",
        entryFileNames: ({ name }) =>
          name?.includes("module") ? "[name].js" : "build/js/[name].js",
        chunkFileNames: "build/js/[name]-[hash].js",
      },
    },
    target: "es2020",
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
});
```






We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Jim Nouvakis

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository. 