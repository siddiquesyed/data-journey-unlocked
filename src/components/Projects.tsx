import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projectImage from "@/assets/project-showcase.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Created an interactive dashboard analyzing quarterly sales data, identifying trends and key performance indicators to support business decisions.",
      image: projectImage,
      tags: ["Excel", "Power BI", "Data Visualization"],
      type: "Academic Project",
      highlights: [
        "Analyzed 10,000+ sales records",
        "Created 5 interactive visualizations",
        "Identified 15% revenue growth opportunity"
      ]
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Performed customer segmentation using RFM analysis to help a fictional e-commerce company understand customer behavior patterns.",
      image: projectImage,
      tags: ["Python", "Pandas", "Matplotlib", "SQL"],
      type: "Personal Project",
      highlights: [
        "Segmented 5,000+ customers into 4 groups",
        "Improved targeting strategy efficiency",
        "Created actionable marketing recommendations"
      ]
    },
    {
      title: "Survey Data Analysis",
      description: "Analyzed student satisfaction survey data to identify factors affecting academic performance and student engagement.",
      image: projectImage,
      tags: ["R", "Statistical Analysis", "Data Cleaning"],
      type: "Course Project",
      highlights: [
        "Processed survey responses from 500+ students",
        "Applied statistical tests and correlation analysis",
        "Presented findings to academic committee"
      ]
    },
    {
      title: "Financial Data Visualization",
      description: "Built comprehensive visualizations for stock market data analysis, tracking performance metrics and identifying investment patterns.",
      image: projectImage,
      tags: ["Tableau", "Data Visualization", "Financial Analysis"],
      type: "Learning Project",
      highlights: [
        "Visualized 2 years of market data",
        "Created interactive filter system",
        "Identified seasonal trading patterns"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical applications of data analysis skills through academic and personal projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Key Achievements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More projects and case studies available upon request
          </p>
          <Button variant="outline" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;