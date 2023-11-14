import { Field } from "./Field";
import { FIELDS } from "../constants/fields";

import { Card } from "./Card";
import { CARDS } from "../constants/cards";

export const Board = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 place-items-center gap-1">
        {FIELDS.map((_, index) => (
          <Field key={index}>
            <Card card={CARDS[index]} />
          </Field>
        ))}
      </div>
    </section>
  );
};
