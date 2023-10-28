import MicroModal from "micromodal";

const init = () => {
  MicroModal.init();
};

const open = (id) => {
  MicroModal.show(id);
};

const close = (id) => {
  MicroModal.close(id);
};

export const Modal = {
  init,
  open,
  close,
};
