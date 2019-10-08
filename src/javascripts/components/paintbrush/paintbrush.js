import utilities from '../../helpers/utilities';

const colors = ['chartreuse', 'darkorchid', 'papayawhip', 'blanchedalmond', 'tomato', 'cornsilk'];

const printColorPicker = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `
      <div class="form-check form-check-inline">
        <input name="color-radio" class="form-check-input" type="radio" id="${color}inlineCheckbox" value="${color}">
        <label class="form-check-label" for="${color}inlineCheckbox">${color}</label>
      </div>
      `;

    utilities.printToDom(domString, 'color-picker');
  }
};

export default { printColorPicker };
