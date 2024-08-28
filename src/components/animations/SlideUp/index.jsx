function SlideUp(children, duration) {
  return (
    <div data-aos="slide-up" data-aos-duration={duration}>
      {children}
    </div>
  );
}

export default SlideUp;
