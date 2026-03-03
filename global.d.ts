import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { class?: string, slot?: string };
      'md-outlined-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { class?: string, slot?: string };
      'md-icon-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { class?: string, slot?: string };
      'md-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { class?: string, slot?: string };
    }
  }
}