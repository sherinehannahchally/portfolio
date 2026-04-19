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
    }),
  ],
  exports: [LucideAngularModule],
})
export class LucideBundleModule {}
