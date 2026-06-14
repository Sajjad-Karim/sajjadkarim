function ContactBackground() {
  return (
    <div
      className="contact-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="contact-bg__wash" />
      <div className="contact-bg__glow contact-bg__glow--center" />
      <div className="contact-bg__glow contact-bg__glow--accent" />
    </div>
  );
}

export default ContactBackground;
