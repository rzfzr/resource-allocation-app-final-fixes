export default class GenericField {
  name: string;
  label: string;

  constructor(name, label) {
    this.name = name;
    this.label = label;
  }

  forImportViewTable(value) {
    if (value == null) {
      return null;
    }
    
    return String(value);
  }

  forPresenter(value) {
    return value;
  }

  forFilterPreview(value) {
    return value;
  }

  forFormInitialValue(value) {
    return value;
  }

  forFilterInitialValue(value) {
    return value;
  }

  forFilterRules(): Array<any> {
    return [];
  }

  forFormRules(): Array<any> {
    return [];
  }

  forFormCast(): any {
    return undefined;
  }

  forFilterCast(): any {
    return undefined;
  }

  forExport(): any {
    return undefined;
  }

  forImport(): any {
    return undefined;
  }
}
