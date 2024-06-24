import { useState } from "react";
import BookingCombo from "../BookingCombo";
import { CircleCheck } from "lucide-react";

const ComboCard = ({ combo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [selectComboId, setSelectComboId] = useState();
  const handleOpenModal = (comboId) => {
    setIsOpen(true);
    setSelectComboId(comboId);
  };
  const handleHideModal = () => setIsOpen(false);

  return (
    <div className="col col-lg-3 col-md-6 col-sm-6 cursor-pointer">
      <div
        className={`${
          isHover ? "bg-purple-600 text-white shadow-xl" : ""
        } p-4 border-2 rounded-lg duration-300 ease-in-out`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <h3 className={`${isHover ? "text-white" : ""}`}>{combo.comboType}</h3>
        <div className="text-xl my-5 w-full bg-purple-600">
          <span className="value_text">{combo.price}</span>
        </div>
        <ul className="pricing_info_list w-full">
          {combo.services.map((service, idx) => (
            <li key={idx} className="flex w-full items-center gap-x-3 ">
              <CircleCheck size={16} strokeWidth={1.25} />
              <div>
                {service.included ? (
                  <span>{service.serviceName}</span>
                ) : (
                  <del>
                    <span>{service.serviceName}</span>
                  </del>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <button
        onClick={() => handleOpenModal(combo.comboId)}
        className="btn border_primary mt-5"
      >
        Purchase Now
      </button> */}
      {isOpen && selectComboId === combo.comboId && (
        <BookingCombo
          isOpen={isOpen}
          handleHideModal={handleHideModal}
          comboId={selectComboId}
        />
      )}
    </div>
  );
};

export default ComboCard;
