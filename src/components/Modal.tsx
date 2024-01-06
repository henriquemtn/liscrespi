import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, actionLabel, footer, disabled }) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div className="
          fixed 
          inset-0 
          z-50 
          overflow-x-hidden 
          overflow-y-auto 
          bg-neutral-800 
          bg-opacity-70 
          flex 
          justify-center 
          items-center
        ">
          <div className="
            w-full 
            h-full 
            lg:h-auto 
            m-4
            mt-12
            lg:my-0 
            lg:mx-auto 
            max-w-2xl 
          ">
            <div className="
              rounded-lg 
              bg-white 
              shadow-lg 
              p-6 
              lg:p-10 
              w-full 
              lg:w-auto
            ">
              <div className="
                flex 
                items-center 
                justify-between 
                mb-6
              ">
                <h3 className="text-3xl font-semibold text-black">
                  {title}
                </h3>
                <button
                  className="
                    p-1 
                    ml-auto
                    border-0 
                    text-black 
                    hover:opacity-70
                    transition
                  "
                  onClick={handleClose}
                >
                  <AiOutlineClose size={20} />
                </button>
              </div>
              <div className="p-4">
                {body}
              </div>
              <div className="flex flex-col gap-4 p-4">
                <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                {footer}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;