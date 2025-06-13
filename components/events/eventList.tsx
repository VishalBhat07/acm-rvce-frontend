import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  imageUrl: string;
  registrationLink: string;
  category: string;
}

interface EventListProps {
  events: Event[];
}

export function EventList({ events }: EventListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence>
        {events.map((event) => (
          <motion.div
            key={event.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className="group flex h-full flex-col overflow-hidden transition-colors hover:bg-accent/40"
              key={event.id}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
                  {event.title}
                </CardTitle>
                <CardDescription className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.venue}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {event.description}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {event.category}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  variant="secondary"
                  className="w-full transition-all hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(event.registrationLink, "_blank")}
                >
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
