import "./googleCalendar.css"

export const GoogleCalendar = () => {
    return (
                <div className="calendar-wrapper">
                    <iframe 
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=Z2l0aGlyZWQyNEBnbWFpbC5jb20&color=%23039be5" 
                        width="590" 
                        height="600">
                    </iframe>
                </div>
    );
};
