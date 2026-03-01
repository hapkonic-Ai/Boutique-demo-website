export default function SuccessModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="success-modal reveal-scale active">
                <div className="success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h2 className="success-title">Order Received</h2>
                <p className="success-desc">
                    Thank you for expressing interest via our business showcase demo. In a real environment, your order would now be processed.
                </p>
                <button className="btn-luxe success-btn" onClick={onClose}>
                    Continue Exploring <span className="arrow">&rarr;</span>
                </button>
            </div>
        </div>
    );
}
