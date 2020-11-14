export default {
  "title": "Copper Plus",
  "tagline": "Decentralized Social Network for Commodity Market",
  "url": "https://copper-plus.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon/favicon.ico",
  "organizationName": "copper-plus",
  "projectName": "copper-plus",
  "themeConfig": {
    "navbar": {
      "title": "| Copper-plus",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Documentation",
              "to": "docs/"
            },
            {
              "label": "Further Readings",
              "to": "#"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/copperplus.srilanka"
            },
            {
              "label": "Twitter",
              "href": "#"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "#"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/copper-plus/copper-plus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Legator Solutions (Pvt) Ltd, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/tharindu/Desktop/copper-plus/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/tharindu/Desktop/copper-plus/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|"
};