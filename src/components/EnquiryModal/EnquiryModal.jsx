import { useEffect, useState } from "react";
import { CheckCircle2, Copy, MessageCircle, X } from "lucide-react";
import { useEnquiryModal } from "../../context/EnquiryModalContext";
import { useLanguage } from "../../context/LanguageContext";
import {
  formatWhatsAppMessage,
  triggerWhatsAppRedirect,
} from "../../utils/whatsapp";

const MIN_PICKUP_CHARS = 15;

export default function EnquiryModal() {
  const { state, closeEnquiryModal, updateEnquiryPayload } = useEnquiryModal();
  const { t } = useLanguage();
  const { isOpen, title, payload } = state;

  const allowPickupEdit = Boolean(payload?.allowPickupEdit);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [extraMsg, setExtraMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [waUrl, setWaUrl] = useState("");
  const [waText, setWaText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setExtraMsg(payload.notes || "");
      setErrorMsg("");
      setWaUrl("");
      setWaText("");
      setCopied(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeEnquiryModal();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

  const trimmedPickup = (payload.pickupLocation || "").trim();

  const summaryRows = [
    payload.serviceType && { label: "Type", value: payload.serviceType },
    payload.packageName && { label: "Package", value: payload.packageName },
    trimmedPickup && {
      label: t("hero.from"),
      value: trimmedPickup,
      fullWidth: allowPickupEdit,
    },
    payload.destination && {
      label: t("hero.goingTo"),
      value: payload.destination,
    },
    payload.extraDestinations?.length
      ? {
          label: t("planner.stops"),
          value: payload.extraDestinations.join(", "),
        }
      : null,
    payload.travelDate && {
      label: t("planner.startDate"),
      value: payload.travelDate,
    },
    payload.returnDate && {
      label: t("planner.returnDate"),
      value: payload.returnDate,
    },
    payload.days
      ? { label: t("planner.days"), value: `${payload.days}` }
      : null,
    payload.travellers && {
      label: t("hero.travellers"),
      value: payload.travellers,
    },
    payload.vehiclePreference && {
      label: t("planner.vehicle"),
      value: payload.vehiclePreference,
    },
    payload.stayPreference && {
      label: t("planner.hotel"),
      value: payload.stayPreference,
    },
    payload.foodPreference && {
      label: t("planner.meals"),
      value: payload.foodPreference,
    },
    payload.estimatedSummary && {
      label: t("planner.estimatedTotal"),
      value: payload.estimatedSummary,
    },
  ].filter(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg(t("modal.errName"));
      return;
    }

    const cleanDigits = phone.replace(/[^\d]/g, "");
    if (cleanDigits.length < 10 || cleanDigits.length > 13) {
      setErrorMsg(t("modal.errPhone"));
      return;
    }

    if (allowPickupEdit && trimmedPickup.length < MIN_PICKUP_CHARS) {
      setErrorMsg(
        `Please enter a complete pickup address (minimum ${MIN_PICKUP_CHARS} characters).`,
      );
      return;
    }

    const { allowPickupEdit: _ignoreFlag, ...cleanPayload } = payload;

    const finalPayload = {
      ...cleanPayload,
      pickupLocation: allowPickupEdit ? trimmedPickup : payload.pickupLocation,
      customerName: name.trim(),
      customerPhone: phone.trim(),
      notes: extraMsg.trim() || undefined,
    };

    const preview = formatWhatsAppMessage(finalPayload);
    const url = triggerWhatsAppRedirect(finalPayload);
    setWaText(preview);
    setWaUrl(url);
  };

  const handleCopy = async () => {
    if (!waText) return;
    try {
      await navigator.clipboard.writeText(waText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="enquiry-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="common-enquiry-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnquiryModal();
      }}
    >
      <div className="enquiry-modal-dialog">
        <div className="d-flex align-items-start justify-content-between gap-3 mb-3">
          <div>
            <span className="section-kicker mb-1">{t("modal.kicker")}</span>
            <h2 id="common-enquiry-modal-title" className="h4 fw-bold mb-0">
              {title || t("modal.defaultTitle")}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeEnquiryModal}
            className="btn btn-light border rounded-circle d-inline-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40 }}
            aria-label="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {summaryRows.length > 0 && (
          <div className="p-3 rounded-3 border bg-light mb-3 small">
            <div className="fw-semibold text-dark mb-2">
              {t("modal.selectedDetails")}
            </div>
            <div className="row g-2">
              {summaryRows.map((row) => (
                <div key={row.label} className="col-sm-6">
                  <span className="text-secondary">{row.label}: </span>
                  <strong className="text-dark">{row.value}</strong>
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="modal-customer-name" className="form-label">
              {t("modal.nameLabel")} <span className="text-danger">*</span>
            </label>
            <input
              id="modal-customer-name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("modal.namePlaceholder")}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="modal-customer-phone" className="form-label">
              {t("modal.phoneLabel")} <span className="text-danger">*</span>
            </label>
            <input
              id="modal-customer-phone"
              type="tel"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t("modal.phonePlaceholder")}
              required
            />
          </div>

          {allowPickupEdit && (
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label
                  htmlFor="modal-pickup-location"
                  className="form-label mb-0"
                >
                  {t("hero.from")} <span className="text-danger">*</span>
                </label>
                <span
                  className={`small ${
                    trimmedPickup.length >= MIN_PICKUP_CHARS
                      ? "text-success fw-semibold"
                      : "text-secondary"
                  }`}
                >
                  {trimmedPickup.length}/{MIN_PICKUP_CHARS} min
                </span>
              </div>
              <input
                id="modal-pickup-location"
                type="text"
                className="form-control"
                minLength={MIN_PICKUP_CHARS}
                value={payload.pickupLocation ?? ""}
                onChange={(e) =>
                  updateEnquiryPayload({ pickupLocation: e.target.value })
                }
                placeholder={`Enter full pickup address & landmark (min ${MIN_PICKUP_CHARS} characters)`}
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="modal-extra-message" className="form-label">
              {t("modal.msgLabel")}
            </label>
            <textarea
              id="modal-extra-message"
              rows={2}
              className="form-control"
              value={extraMsg}
              onChange={(e) => setExtraMsg(e.target.value)}
              placeholder={t("modal.msgPlaceholder")}
            />
          </div>

          {errorMsg && (
            <div
              className="alert alert-danger py-2 px-3 small mb-3"
              role="alert"
            >
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="btn-whatsapp w-100 justify-content-center"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>{t("modal.submitBtn")}</span>
          </button>

          <p className="small text-secondary text-center mt-2 mb-0">
            {t("modal.note")}
          </p>
        </form>

        {waUrl && (
          <div
            className="mt-3 p-3 rounded-3 border"
            style={{ backgroundColor: "#ebf7f1", borderColor: "#35a76f" }}
            role="status"
          >
            <div className="d-flex align-items-start gap-2 mb-2">
              <CheckCircle2
                size={19}
                className="text-success flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <div className="small">
                <strong className="d-block text-dark">
                  {t("modal.readyTitle")}
                </strong>
                <span className="text-secondary">{t("modal.readySub")}</span>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>{t("modal.openWa")}</span>
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="btn-outline-navy"
              >
                <Copy size={16} aria-hidden="true" />
                <span>{copied ? t("modal.copied") : t("modal.copyText")}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
