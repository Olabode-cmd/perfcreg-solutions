export default function ServiceBox({icon, title, text}) {
    return (
        <div className="col-md-4">
            <div className="service-box">
                <div className="service-title">
                    {icon}
                    <span className='title'>{title}</span>
                </div>

                <div className="service-content">
                    <p>
                        {text}
                    </p>

                </div>
            </div>
        </div>
    )
}