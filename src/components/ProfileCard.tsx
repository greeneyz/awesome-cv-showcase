import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Dumbbell, Plane, Target, Sparkles, TrendingUp, Code2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

// Primary employer: TietoEvry — since May 2017 (continuous).
// Chart shows customer engagements delivered while at TietoEvry.
const tietoStartYear = 2017;
const tietoStartMonth = 5; // May
const now = new Date();
const tietoYears = +(
  (now.getFullYear() - tietoStartYear) +
  (now.getMonth() + 1 - tietoStartMonth) / 12
).toFixed(1);

const experienceData = [
  { company: "Tieto Care (Lifecare AI Assistant)", years: 1.2 },
  { company: "Kela", years: 1.0 },
  { company: "Ilmarinen", years: 1.4 },
  { company: "Plandent", years: 0.8 },
  { company: "Kesko", years: 1.0 },
  { company: "Other Tieto Projects", years: Math.max(0, +(tietoYears - 5.4).toFixed(1)) },
];

const techStack = [
  { skill: "Frontend (React/Vue/Angular)", level: 95 },
  { skill: "TypeScript / JavaScript", level: 95 },
  { skill: "Node.js / Backend APIs", level: 85 },
  { skill: "Cloud (Azure / AWS)", level: 85 },
  { skill: "Data Engineering (Spark/Airflow)", level: 80 },
  { skill: "DevOps / CI-CD", level: 75 },
];

const certifications = [
  "Microsoft Certified: Azure Developer Associate (AZ-204)",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "AWS Certified Cloud Practitioner",
  "Scrum Master Certified",
];

const hobbies = [
  { icon: Dumbbell, label: "Gym & Fitness", desc: "Strength training and consistent routines" },
  { icon: Target, label: "Cricket", desc: "Weekend matches and team sport" },
  { icon: Plane, label: "Travelling", desc: "Exploring new cultures and cuisines" },
];

const plans = [
  { label: "Azure DevOps Engineer Expert", desc: "Deepening CI/CD and cloud delivery skills" },
  { label: "Databricks Certified Data Engineer", desc: "Advancing data engineering on Lakehouse" },
];

export const ProfileCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="group relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden text-left shadow-glow ring-1 ring-primary-foreground/20 hover:ring-primary-foreground/40 transition-all hover:scale-[1.02]"
          aria-label="Open my professional snapshot"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-primary/40 to-primary-dark/60" />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25) 0%, transparent 40%)"
          }} />
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          <div className="relative h-full flex flex-col justify-between p-8 text-primary-foreground">
            <div className="flex items-center justify-between">
              <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-1" />
                Snapshot
              </Badge>
              <TrendingUp className="w-6 h-6 opacity-80" />
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">9+</span>
                <span className="text-lg opacity-90">years</span>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Engineering across <strong>Full Stack</strong>, <strong>Cloud</strong>, and <strong>Data</strong> — from healthcare to telecom.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-2 text-center">
                  <div className="text-xl font-bold">10+</div>
                  <div className="text-[10px] opacity-80 uppercase tracking-wider">Projects</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-2 text-center">
                  <div className="text-xl font-bold">4</div>
                  <div className="text-[10px] opacity-80 uppercase tracking-wider">Certs</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-2 text-center">
                  <div className="text-xl font-bold">2</div>
                  <div className="text-[10px] opacity-80 uppercase tracking-wider">In Progress</div>
                </div>
              </div>

              <div className="pt-2 text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                Click to view my full snapshot →
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Asim Imtiaz — Professional Snapshot
          </DialogTitle>
          <DialogDescription>
            A quick introduction — experience, certifications, interests, and what's next.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          {/* Experience Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Customer Engagements at TietoEvry
              </CardTitle>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Badge variant="secondary" className="text-xs">
                  TietoEvry · since May 2017
                </Badge>
                <Badge className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15">
                  {tietoYears} years &amp; counting
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={experienceData} margin={{ top: 10, right: 20, left: 0, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="company" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} label={{ value: "Years", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))"
                      }}
                    />
                    <Bar dataKey="years" radius={[8, 8, 0, 0]}>
                      {experienceData.map((_, i) => (
                        <Cell key={i} fill={`hsl(var(--primary) / ${0.6 + i * 0.1})`} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack Radar */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Tech Stack Proficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={techStack} outerRadius="75%">
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="skill" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                    <Radar name="Level" dataKey="level" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        color: "hsl(var(--foreground))"
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>


          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50 border border-border">
                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Hobbies & Plans grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-primary" />
                  Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hobbies.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                    <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">{label}</div>
                      <div className="text-xs text-muted-foreground">{desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  What's Next
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {plans.map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">{label}</div>
                      <div className="text-xs text-muted-foreground">{desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
