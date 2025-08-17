import { Download, Eye, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/sneha-mudgal-resume.pdf';
    link.download = 'Sneha_Mudgal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // In a real app, this would open the resume in a new tab or modal
    window.open('/sneha-mudgal-resume.pdf', '_blank');
  };

  const resumeHighlights = [
    'Complete professional experience and project portfolio',
    'Detailed technical skills and competencies',
    'Educational background and certifications',
    'Contact information and references'
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download or view my complete professional resume with detailed information about 
            my experience, skills, and achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Resume Info */}
            <div className="space-y-8">
              <Card className="project-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <span>Resume Contents</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resumeHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleDownloadResume}
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 glow-hover"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume (PDF)
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleViewResume}
                  size="lg"
                  className="w-full scale-hover"
                >
                  <Eye className="w-5 h-5 mr-3" />
                  View Resume Online
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <p className="text-sm text-muted-foreground mb-2">
                  Last Updated: December 2024
                </p>
                <p className="text-xs text-muted-foreground">
                  Available in PDF format • Mobile optimized • ATS friendly
                </p>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="relative">
              <Card className="project-card">
                <CardContent className="p-0">
                  {/* Resume Preview Placeholder */}
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-surface to-background rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-center p-8">
                    <div className="space-y-6">
                      <div className="p-4 bg-gradient-primary rounded-2xl text-primary-foreground mx-auto w-fit">
                        <FileText className="w-12 h-12" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-foreground">Resume Preview</h3>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          Click the buttons to download or view the complete resume
                        </p>
                      </div>

                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="h-2 bg-primary/20 rounded w-3/4 mx-auto" />
                        <div className="h-2 bg-primary/15 rounded w-2/3 mx-auto" />
                        <div className="h-2 bg-primary/10 rounded w-4/5 mx-auto" />
                        <div className="h-2 bg-primary/15 rounded w-1/2 mx-auto" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-30 animate-float delay-1000" />
            </div>
          </div>

          {/* Professional Links */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Professional Profiles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/sneha-mudgal-5a2649254', '_blank')}
                className="scale-hover"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com', '_blank')}
                className="scale-hover"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;