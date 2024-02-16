// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  // wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {
      // Init AOS
      AOS.init();

      // GSAP Config
      gsap.config({
        nullTargetWarn: false,
      });

      // Regist GSAP Plugins
      gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        SplitText,
        ScrollToPlugin
      );

      // Scroll Smoother
      const $wrapper = document.getElementById("main-wrapper");
      const $content = document.getElementById("main-content");

      const $smoother = ScrollSmoother.create({
        wrapper: $wrapper,
        content: $content,
        smooth: 1.5,
        effects: false,
        smoothTouch: 0,
        preventDefault: true,
        normalizeScroll: { allowNestedScroll: true },
        ignoreMobileResize: true,
        onUpdate: (self) => {},
      });

      $smoother.effects(".parallax", { speed: "auto" });

      /* ###################################### */
      /* ######## JS Animations Start ######## */
      /* #################################### */


      


      let mm = gsap.matchMedia();


      mm.add("(max-width: 640px)", () => {

        gsap.set("#logo", { opacity: 0, scale: 0 })
        gsap.set("#logo-rms", { opacity: 0, scale: 0 })
        gsap.set("#logo-rotana", { x: 0 ,opacity: 0, scale: 0 })
        gsap.set("#advertise-with-us", { y: 300, opacity: 0, scale: 0 })
        gsap.set("#top-logo", { y: -50 ,opacity: 0 })
        gsap.set("#footer", { y: 50 ,opacity: 0 })
        gsap.set("#sales", { y: -100 ,opacity: 0 })
        gsap.set("#video", { y: 500 ,opacity: 0 })
        gsap.set(".logo-sm", { scale: 0})

        gsap.timeline()
        .to("#logo-rms", 0.5,  { opacity: 1, scale: 1})
        .to("#logo-rms", 0.5, { y: -70}, "one+=1")
        .to("#logo-rotana", 0.5, {y: 70, opacity: 1, scale: 1}, "one+=0.95")
        .to("#logo-rms", 0.5, { y: -1500, opacity: 0}, "two+=1")
        .to("#logo-rotana", 0.5, { y: 1500, opacity: 0}, "two+=1")
        .to("#logo", 1.5, { scale: 1, opacity: 1, ease: "bounce.out"}, "three-=0.8")
        .to("#logo", 0.5, { y: -90,scale: 1, opacity: 1}, "four+=1")
        .to("#advertise-with-us", 0.5, { y: 390, scale: 1, opacity: 1}, "four+=1")
        .to("#logo", 0.3, { y: -120, scale: 0.5, opacity: 0}, "five+=1")
        .to("#advertise-with-us", 0.5, { y: 0, scale: 1, opacity: 1}, "five+=1")
        .to("#top-logo", 0.5, { y: 0, opacity: 1}, "five+=1")
        .to("#footer", 0.5, { y: 0, opacity: 1}, "five+=1.5")
        .to("#sales", 0.5, { y: 0, opacity: 1}, "five+=1")
        .to("#video", 0.5, { y: 0, opacity: 1}, "five+=1")
        .to(".logo-sm", 1,  { scale: 1, ease: "bounce.out", stagger: 0.3}, "five+=2")
  

      });



      mm.add("(min-width: 641px)", () => {


        gsap.set("#logo", { opacity: 0, scale: 0 })
        gsap.set("#logo-rms", { opacity: 0, scale: 0 })
        gsap.set("#logo-rotana", { x: 0 ,opacity: 0, scale: 0 })
        gsap.set("#advertise-with-us", { x: 350, opacity: 0, scale: 0 })
        gsap.set("#top-logo", { y: -50 ,opacity: 0 })
        gsap.set("#footer", { y: 50 ,opacity: 0 })
        gsap.set("#sales", { x: -100 ,opacity: 0 })
        gsap.set("#video", { x: 500 ,opacity: 0 })
        gsap.set(".logo-sm", { scale: 0})


        gsap.timeline()
        .to("#logo-rms", 0.5,  { opacity: 1, scale: 1})
        .to("#logo-rms", 0.5, { x: -320}, "one+=1")
        .to("#logo-rotana", 0.5, {x: 200, opacity: 1, scale: 1}, "one+=0.95")
        .to("#logo-rms", 0.5, { x: -1500, opacity: 0}, "two+=1")
        .to("#logo-rotana", 0.5, { x: 1500, opacity: 0}, "two+=1")
        .to("#logo", 1.5, { scale: 1, opacity: 1, ease: "bounce.out"}, "three-=0.5")
        .to("#logo", 0.5, { x: -300,scale: 1, opacity: 1}, "four+=1")
        .to("#advertise-with-us", 0.5, { x: 100, scale: 1, opacity: 1}, "four+=1")
        .to("#logo", 0.3, { x: -500, scale: 0.5, opacity: 0}, "five+=1")
        .to("#advertise-with-us", 0.5, { x: -400, scale: 1, opacity: 1}, "five+=1")
        .to("#top-logo", 0.5, { y: 0, opacity: 1}, "five+=1")
        .to("#footer", 0.5, { y: 0, opacity: 1}, "five+=1")
        .to("#sales", 0.5, { x: 0, opacity: 1}, "five+=1")
        .to("#video", 0.5, { x: 0, opacity: 1}, "five+=1")
        .to(".logo-sm", 1,  { scale: 1, ease: "bounce.out", stagger: 0.3}, "five+=2")
  

      });    
      
      



      /* #################################### */
      /* ######## JS Animations End ######## */
      /* ################################## */
    },
    false
  );
});
