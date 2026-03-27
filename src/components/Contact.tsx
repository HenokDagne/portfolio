import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "henokdagne19@gmail.com",
    href: "mailto:henokdagne19@gmail.com",
  },
  {
    icon: Phone,
    label: "+251 93 3650 5385",
    href: "tel:+2519336505385",
  },
  {
    icon: Github,
    label: "github.com/HenokDagne",
    href: "https://github.com/HenokDagne",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/henok-dagne-0b7a112a3/",
  },
  {
    icon: MessageCircle,
    label: "@henok_dagne on Telegram",
    href: "https://t.me/hnk_43",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
          Contact
        </h2>
        <p className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-md leading-tight">
          Time to build something together.
        </p>

        <div className="max-w-md">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-foreground/20 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {label}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
