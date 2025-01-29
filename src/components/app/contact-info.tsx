export type ContactInfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
};

export const ContactInfo = ({ icon, label, value, link }: ContactInfoProps) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center justify-center bg-muted p-4">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{label}</span>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            {value}
          </a>
        ) : (
          <span className="text-muted-foreground">{value}</span>
        )}
      </div>
    </div>
  );
};
