import "../assets/css/card.css";

const SimpleCard = ({ children, title, subtitle, icon }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="app-brand justify-content-center"></div>
        <h4 className="mb-2">{title}</h4>
        <p className="mb-4">{subtitle}</p>
        <div className="mt-3">
          <div className="d-grid gap-2 col-lg-6 mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
