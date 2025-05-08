// src/hooks/useDocumentTitle.js
import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
