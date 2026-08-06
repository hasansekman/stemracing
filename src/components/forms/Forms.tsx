"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
  className?: string;
};

function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
  options,
  placeholder,
  className,
}: FieldProps) {
  const base =
    "w-full bg-white/5 border border-current/20 rounded-[10px] px-4 py-3 text-base outline-none focus:border-brand-accent transition-colors";

  return (
    <label className={cn("block", className)}>
      <span className="block mb-2 text-sm font-meta">
        {label}
        {required ? " *" : ""}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className={cn(base, "resize-y min-h-[140px]")}
        />
      ) : as === "select" ? (
        <select name={name} required={required} className={base} defaultValue="">
          <option value="" disabled>
            Seçiniz…
          </option>
          {options?.map((option) => (
            <option key={option} value={option} className="text-brand-black">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

function FormShell({
  children,
  onSubmit,
  successMessage,
  submitted,
}: {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  successMessage: string;
  submitted: boolean;
}) {
  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[10px] border border-current/20 bg-white/5 p-6"
      >
        <p className="text-lg font-[family-name:var(--font-heading)] italic mb-2">
          Teşekkürler
        </p>
        <p className="opacity-90">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {children}
    </form>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return (
    <FormShell
      submitted={submitted}
      onSubmit={handleSubmit}
      successMessage="Teşekkürler — mesajınız alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Ad" name="firstName" required />
        <Field label="Soyad" name="lastName" required />
      </div>
      <Field label="E-posta" name="email" type="email" required />
      <Field
        label="Ben bir"
        name="role"
        as="select"
        required
        options={["Öğretmen", "Öğrenci", "Gönüllü", "Sponsor", "Diğer"]}
      />
      <Field label="Konu" name="subject" required />
      <Field label="Mesaj" name="message" as="textarea" required />
      <Button type="submit">Mesaj gönder</Button>
    </FormShell>
  );
}

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return (
    <FormShell
      submitted={submitted}
      onSubmit={handleSubmit}
      successMessage="Teşekkürler — kaydınız alındı. Bülten güncellemeleri için e-posta listenize ekleneceksiniz."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Ad" name="firstName" required />
        <Field label="Soyad" name="lastName" required />
      </div>
      <Field label="E-posta" name="email" type="email" required />
      <Field
        label="Ülke"
        name="country"
        as="select"
        required
        options={[
          "Türkiye",
          "Birleşik Krallık",
          "Amerika Birleşik Devletleri",
          "Avustralya",
          "Singapur",
          "Diğer",
        ]}
      />
      <label className="flex items-start gap-3 text-sm opacity-90">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          STEM Racing güncellemelerini almak istiyorum ve{" "}
          <a href="/privacy-policy" className="underline">
            Gizlilik Politikası
          </a>
          ’nı kabul ediyorum.
        </span>
      </label>
      <Button type="submit">Hemen kaydolun</Button>
    </FormShell>
  );
}

export function DonateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState("25");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  const presets = ["10", "25", "50", "100"];

  return (
    <FormShell
      submitted={submitted}
      onSubmit={handleSubmit}
      successMessage="Teşekkürler — bağış niyetiniz kaydedildi. Ödeme altyapısı bağlandığında işlemi tamamlayabileceksiniz."
    >
      <fieldset>
        <legend className="font-meta text-sm mb-3">Tutar seçin (TRY)</legend>
        <div className="flex flex-wrap gap-3 mb-4">
          {presets.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setAmount(value)}
              className={cn(
                "px-4 py-2 rounded-[5.6px] border-2 transition-colors",
                amount === value
                  ? "border-brand-accent bg-brand-accent text-white"
                  : "border-current/30",
              )}
            >
              ₺{value}
            </button>
          ))}
        </div>
        <Field
          label="Özel tutar"
          name="amount"
          type="number"
          required
          placeholder="Tutar girin"
        />
        <input type="hidden" name="selectedPreset" value={amount} readOnly />
      </fieldset>
      <Field label="Ad soyad" name="fullName" required />
      <Field label="E-posta" name="email" type="email" required />
      <label className="flex items-start gap-3 text-sm opacity-90">
        <input type="checkbox" name="monthly" className="mt-1" />
        <span>Bu bağışı aylık yapmak istiyorum</span>
      </label>
      <Button type="submit">Bağış yap</Button>
    </FormShell>
  );
}

export function InterestForm({
  title = "İlginizi kaydedin",
}: {
  title?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return (
    <div>
      <h3 className="text-2xl md:text-3xl mb-6">{title}</h3>
      <FormShell
        submitted={submitted}
        onSubmit={handleSubmit}
        successMessage="Teşekkürler — ilginiz kaydedildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
      >
        <Field label="Ad soyad" name="fullName" required />
        <Field label="Okul / kurum" name="organisation" required />
        <Field label="E-posta" name="email" type="email" required />
        <Field
          label="İlgi alanı"
          name="interest"
          as="select"
          required
          options={[
            "Öğrenme kanalı",
            "Discovery kaynakları",
            "Dünya Finalleri",
            "Ortaklık",
          ]}
        />
        <Field label="Notlar" name="notes" as="textarea" />
        <Button type="submit">İlgi kaydı oluştur</Button>
      </FormShell>
    </div>
  );
}
