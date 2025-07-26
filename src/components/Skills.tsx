import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, FileSpreadsheet, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <FileSpreadsheet className="h-6 w-6" />,
      title: "Data Analysis Tools",
      skills: [
        { name: "Microsoft Excel", level: 85 },
        { name: "Google Sheets", level: 80 },
        { name: "Power BI", level: 70 },
        { name: "Tableau", level: 65 }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database & Query",
      skills: [
        { name: "SQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "SQLite", level: 80 }
      ]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming",
      skills: [
        { name: "Python", level: 70 },
        { name: "R", level: 60 },
        { name: "Pandas", level: 65 },
        { name: "NumPy", level: 60 }
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Visualization",
      skills: [
        { name: "Matplotlib", level: 65 },
        { name: "Seaborn", level: 60 },
        { name: "Plotly", level: 55 },
        { name: "Chart.js", level: 50 }
      ]
    }
  ];

  const softSkills = [
    "Critical Thinking",
    "Problem Solving",
    "Attention to Detail",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Analytical Mindset",
    "Continuous Learning"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical and analytical skills developed through dedicated learning and practice
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  {category.icon}
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-primary">
              Soft Skills & Personal Qualities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;