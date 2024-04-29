/*
<select>
  <option value"Rent"><Rent</option>
  <option value"Beds"><Beds</option>
  <option value"Baths"><Baths</option>
  <option value"Type"><Type</option>
  <option value"Rent_Category"><Rent_Category</option>
  <option value"Frequency"><Frequency</option>
  <option value"City"><City</option>
</select>
*/

export const dropdownMenu = (selection, props) => {
  const {
    options
  } = props;

  let select = selection.selectALL('select').data([null]);
  select = select.enter().append('select').merge(select);

  const option = select.selectALL('option').data(options);
  option.enter().append('option')
    .merge(option)
      .attr('value', d => d)
      .text(d => d);
};
