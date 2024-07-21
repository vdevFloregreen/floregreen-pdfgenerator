import type { Plugin } from '@pdfme/common';
import { pdfRender } from './pdfRender.js';
import { propPanel } from './propPanel.js';
import { uiRender } from './uiRender.js';
import type { MultiVariableTextSchema } from './types';

const schema: Plugin<MultiVariableTextSchema> = { pdf: pdfRender, ui: uiRender, propPanel, uninterruptedEditMode: true };
export default schema;