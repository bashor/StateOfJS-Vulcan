import React from 'react';
import EntityLabel from '../../common/EntityLabel';

const FormOptionLabel = ({ option }) => {
  const { label, id, value } = option;
  const entityProps = {
    id,
    fallback: label,
  };

  // if label has been translated, use that to override entity name
  if (label !== value) {
    entityProps.label = label;
  }

  return (
    <span className="form-option-label">
      <EntityLabel {...entityProps} />
    </span>
  );
};

export default FormOptionLabel;
