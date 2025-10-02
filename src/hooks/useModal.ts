import React, { useCallback } from 'react';

export const useModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = useCallback(() => setVisible(true), []);
  const hideModal = useCallback(() => setVisible(false), []);

  return { visible, showModal, hideModal };
};
