import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Fresh Graduate",
      description: "Recently completed my degree with strong foundations in mathematics and statistics."
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and applying data science methodologies to real-world problems."
    },
    {
      icon: <Users className="h-8 w-8 text-data-secondary" />,
      title: "Team Player",
      description: "Excellent communication skills with ability to present complex data insights clearly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and passion for data-driven insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Journey Into Data Analysis
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As a recent graduate, I've developed a strong passion for data analysis through 
              academic projects and self-directed learning. My journey began with curiosity 
              about how data can tell stories and drive meaningful business decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While I may not have professional experience yet, I've dedicated countless hours 
              to mastering essential tools and methodologies. I've completed various personal 
              projects, online courses, and hands-on exercises that have prepared me to 
              contribute effectively to any data-driven organization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm excited to begin my professional career and eager to apply my analytical 
              mindset, attention to detail, and problem-solving skills to help organizations 
              unlock the power of their data.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;