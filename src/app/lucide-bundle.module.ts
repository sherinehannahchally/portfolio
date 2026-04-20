import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
  GraduationCap,
  Award,
  Cpu,
  Briefcase,
  FolderKanban,
  Sparkles,
  Shield,
  Laptop,
  PenLine,
  FileText,
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Mail,
      Github,
      Linkedin,
      Sun,
      Moon,
      GraduationCap,
      Award,
      Cpu,
      Briefcase,
      FolderKanban,
      Sparkles,
      Shield,
      Laptop,
      PenLine,
      FileText,
    }),
  ],
  exports: [LucideAngularModule],
})
export class LucideBundleModule {}
