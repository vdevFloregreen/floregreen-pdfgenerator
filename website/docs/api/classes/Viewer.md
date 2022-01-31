---
id: "Viewer"
title: "Class: Viewer"
sidebar_label: "Viewer"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `PreviewUI`

  ↳ **`Viewer`**

## Constructors

### constructor

• **new Viewer**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PreviewUIConstructor` |

#### Overrides

PreviewUI.constructor

#### Defined in

[Viewer.tsx:9](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/Viewer.tsx#L9)

## Properties

### domContainer

• `Protected` **domContainer**: ``null`` \| `HTMLElement`

#### Inherited from

PreviewUI.domContainer

#### Defined in

[libs/class.ts:20](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L20)

___

### inputs

• `Protected` **inputs**: { [key: string]: `string`;  }[]

#### Inherited from

PreviewUI.inputs

#### Defined in

[libs/class.ts:90](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L90)

___

### size

• `Protected` **size**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Inherited from

PreviewUI.size

#### Defined in

[libs/class.ts:24](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L24)

___

### template

• `Protected` **template**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basePdf` | `string` \| `ArrayBuffer` \| `Uint8Array` |
| `columns` | `undefined` \| `string`[] |
| `sampledata` | `undefined` \| `Record`<`string`, `string`\>[] |
| `schemas` | `Record`<`string`, { `alignment`: `undefined` \| ``"left"`` \| ``"center"`` \| ``"right"`` ; `backgroundColor`: `undefined` \| `string` ; `characterSpacing`: `undefined` \| `number` ; `fontColor`: `undefined` \| `string` ; `fontName`: `undefined` \| `string` ; `fontSize`: `undefined` \| `number` ; `height`: `number` ; `lineHeight`: `undefined` \| `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"text"`` ; `width`: `number`  } \| { `height`: `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"image"`` ; `width`: `number`  } \| { `height`: `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"qrcode"`` \| ``"japanpost"`` \| ``"ean13"`` \| ``"ean8"`` \| ``"code39"`` \| ``"code128"`` \| ``"nw7"`` \| ``"itf14"`` \| ``"upca"`` \| ``"upce"`` ; `width`: `number`  }\>[] |

#### Inherited from

PreviewUI.template

#### Defined in

[libs/class.ts:22](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L22)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

PreviewUI.destroy

#### Defined in

[libs/class.ts:80](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L80)

___

### getFont

▸ `Protected` **getFont**(): `Record`<`string`, { `data`: `ArrayBuffer` \| `Uint8Array` ; `fallback`: `undefined` \| `boolean` ; `subset`: `undefined` \| `boolean`  }\>

#### Returns

`Record`<`string`, { `data`: `ArrayBuffer` \| `Uint8Array` ; `fallback`: `undefined` \| `boolean` ; `subset`: `undefined` \| `boolean`  }\>

#### Inherited from

PreviewUI.getFont

#### Defined in

[libs/class.ts:64](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L64)

___

### getI18n

▸ `Protected` **getI18n**(): (`key`: ``"type"`` \| ``"field"`` \| ``"fieldName"`` \| ``"require"`` \| ``"uniq"`` \| ``"inputExample"`` \| ``"edit"`` \| ``"plsSelect"`` \| ``"plsInputName"`` \| ``"plsAddNewField"`` \| ``"fieldMustUniq"`` \| ``"notUniq"`` \| ``"noKeyName"`` \| ``"fieldsList"`` \| ``"addNewField"`` \| ``"editField"`` \| ``"previewWarnMsg"`` \| ``"previewErrMsg"`` \| ``"goToFirst"`` \| ``"goToPrevious"`` \| ``"goToNext"`` \| ``"goToEnd"`` \| ``"select"`` \| ``"errorOccurred"``) => `string`

#### Returns

`fn`

▸ (`key`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"type"`` \| ``"field"`` \| ``"fieldName"`` \| ``"require"`` \| ``"uniq"`` \| ``"inputExample"`` \| ``"edit"`` \| ``"plsSelect"`` \| ``"plsInputName"`` \| ``"plsAddNewField"`` \| ``"fieldMustUniq"`` \| ``"notUniq"`` \| ``"noKeyName"`` \| ``"fieldsList"`` \| ``"addNewField"`` \| ``"editField"`` \| ``"previewWarnMsg"`` \| ``"previewErrMsg"`` \| ``"goToFirst"`` \| ``"goToPrevious"`` \| ``"goToNext"`` \| ``"goToEnd"`` \| ``"select"`` \| ``"errorOccurred"`` |

##### Returns

`string`

#### Inherited from

PreviewUI.getI18n

#### Defined in

[libs/class.ts:60](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L60)

___

### getInputs

▸ **getInputs**(): { [key: string]: `string`;  }[]

#### Returns

{ [key: string]: `string`;  }[]

#### Inherited from

PreviewUI.getInputs

#### Defined in

[libs/class.ts:100](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L100)

___

### getTemplate

▸ **getTemplate**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `basePdf` | `string` \| `ArrayBuffer` \| `Uint8Array` |
| `columns` | `undefined` \| `string`[] |
| `sampledata` | `undefined` \| `Record`<`string`, `string`\>[] |
| `schemas` | `Record`<`string`, { `alignment`: `undefined` \| ``"left"`` \| ``"center"`` \| ``"right"`` ; `backgroundColor`: `undefined` \| `string` ; `characterSpacing`: `undefined` \| `number` ; `fontColor`: `undefined` \| `string` ; `fontName`: `undefined` \| `string` ; `fontSize`: `undefined` \| `number` ; `height`: `number` ; `lineHeight`: `undefined` \| `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"text"`` ; `width`: `number`  } \| { `height`: `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"image"`` ; `width`: `number`  } \| { `height`: `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"qrcode"`` \| ``"japanpost"`` \| ``"ean13"`` \| ``"ean8"`` \| ``"code39"`` \| ``"code128"`` \| ``"nw7"`` \| ``"itf14"`` \| ``"upca"`` \| ``"upce"`` ; `width`: `number`  }\>[] |

#### Inherited from

PreviewUI.getTemplate

#### Defined in

[libs/class.ts:68](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L68)

___

### render

▸ `Protected` **render**(): `void`

#### Returns

`void`

#### Overrides

PreviewUI.render

#### Defined in

[Viewer.tsx:13](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/Viewer.tsx#L13)

___

### setInputs

▸ **setInputs**(`inputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | { [key: string]: `string`;  }[] |

#### Returns

`void`

#### Inherited from

PreviewUI.setInputs

#### Defined in

[libs/class.ts:106](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L106)

___

### updateTemplate

▸ **updateTemplate**(`template`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `Object` |
| `template.basePdf` | `string` \| `ArrayBuffer` \| `Uint8Array` |
| `template.columns` | `undefined` \| `string`[] |
| `template.sampledata` | `undefined` \| `Record`<`string`, `string`\>[] |
| `template.schemas` | `Record`<`string`, { `alignment`: `undefined` \| ``"left"`` \| ``"center"`` \| ``"right"`` ; `backgroundColor`: `undefined` \| `string` ; `characterSpacing`: `undefined` \| `number` ; `fontColor`: `undefined` \| `string` ; `fontName`: `undefined` \| `string` ; `fontSize`: `undefined` \| `number` ; `height`: `number` ; `lineHeight`: `undefined` \| `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"text"`` ; `width`: `number`  } \| { `height`: `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"image"`` ; `width`: `number`  } \| { `height`: `number` ; `position`: { x: number; y: number; } ; `rotate`: `undefined` \| `number` ; `type`: ``"qrcode"`` \| ``"japanpost"`` \| ``"ean13"`` \| ``"ean8"`` \| ``"code39"`` \| ``"code128"`` \| ``"nw7"`` \| ``"itf14"`` \| ``"upca"`` \| ``"upce"`` ; `width`: `number`  }\>[] |

#### Returns

`void`

#### Inherited from

PreviewUI.updateTemplate

#### Defined in

[libs/class.ts:74](https://github.com/hand-dot/pdfme-beta/blob/5428e9f/src/libs/class.ts#L74)