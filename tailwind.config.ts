module.exports = {
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        bg: {
          DEFAULT: "rgb(var(--color-bg-base))",
          elevated: "rgb(var(--color-bg-elevated))",
          card: "rgb(var(--color-bg-card))",
          "card-highlight": "rgb(var(--color-bg-card-highlight))"
        },

        // Surface elements
        surface: {
          DEFAULT: "rgb(var(--color-surface-primary))",
          secondary: "rgb(var(--color-surface-secondary))"
        },

        // Borders
        border: {
          DEFAULT: "rgb(var(--color-border-default))",
          subtle: "rgb(var(--color-border-subtle))",
          accent: "rgb(var(--color-border-accent))"
        },

        // Text colors
        text: {
          DEFAULT: "rgb(var(--color-text-primary))",
          secondary: "rgb(var(--color-text-secondary))",
          tertiary: "rgb(var(--color-text-tertiary))",
          muted: "rgb(var(--color-text-muted))"
        },

        // Accent colors
        accent: {
          DEFAULT: "rgb(var(--color-accent-primary))",
          secondary: "rgb(var(--color-accent-secondary))",
          muted: "rgb(var(--color-accent-muted))"
        },

        // Button variations
        button: {
          // Depth style buttons
          "depth-default": "rgb(var(--color-button-depth-default))",
          "depth-hover": "rgb(var(--color-button-depth-hover))",
          "depth-active": "rgb(var(--color-button-depth-active))",
          "depth-disabled": "rgb(var(--color-button-depth-disabled))",

          // Soft style buttons
          "soft-default": "rgb(var(--color-button-soft-default))",
          "soft-hover": "rgb(var(--color-button-soft-hover))",
          "soft-active": "rgb(var(--color-button-soft-active))",
          "soft-disabled": "rgb(var(--color-button-soft-disabled))",

          // Flat style buttons
          "flat-default": "rgb(var(--color-button-flat-default))",
          "flat-hover": "rgb(var(--color-button-flat-hover))",
          "flat-active": "rgb(var(--color-button-flat-active))",
          "flat-disabled": "rgb(var(--color-button-flat-disabled))",

          // Shop button
          shop: "rgb(var(--color-button-shop))",
          "shop-text": "rgb(var(--color-button-shop-text))"
        },

        // Radio elements
        radio: {
          selected: "rgb(var(--color-radio-selected))",
          unselected: "rgb(var(--color-radio-unselected))"
        },

        // Category specific colors
        category: {
          groceries: "rgb(var(--color-category-groceries))",
          household: "rgb(var(--color-category-household))",
          travel: "rgb(var(--color-category-travel))",
          other: "rgb(var(--color-category-other))"
        },

        // Status colors
        status: {
          success: "rgb(var(--color-status-success))",
          warning: "rgb(var(--color-status-warning))",
          error: "rgb(var(--color-status-error))",
          info: "rgb(var(--color-status-info))"
        },

        // Badge/tag colors
        badge: {
          DEFAULT: "rgb(var(--color-badge-default))",
          work: "rgb(var(--color-badge-work))",
          travel: "rgb(var(--color-badge-travel))",
          design: "rgb(var(--color-badge-design))",
          remote: "rgb(var(--color-badge-remote))"
        },

        // Calendar event colors
        event: {
          primary: "rgb(var(--color-event-primary))",
          secondary: "rgb(var(--color-event-secondary))",
          tertiary: "rgb(var(--color-event-tertiary))"
        },

        // Product card colors
        product: {
          primary: "rgb(var(--color-product-card-primary))",
          secondary: "rgb(var(--color-product-card-secondary))"
        },

        // Chart colors
        chart: {
          primary: "rgb(var(--color-chart-primary))",
          track: "rgb(var(--color-chart-track))"
        }
      },

      // Gradient definitions
      backgroundImage: {
        "gradient-accent": "var(--gradient-accent)"
      }
    }
  }
};
