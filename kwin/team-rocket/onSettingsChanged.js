// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: GPL-3.0-or-later

// This part is automatically included in the effect's source during the build process.
// The code below is called whenever the user changes something in the configuration of
// the effect.

effect.setUniform(this.shader, 'uAnimationSplit',
                  effect.readConfig('AnimationSplit', 1.0));
effect.setUniform(this.shader, 'uWindowRotation',
                  effect.readConfig('RotateWindow', true) ? 1.0 : 0.0);
effect.setUniform(this.shader, 'uHorizontalSparklePosition',
                  effect.readConfig('HorizontalSparklePosition', 1.0));
effect.setUniform(this.shader, 'uVerticalSparklePosition',
                  effect.readConfig('VerticalSparklePosition', 1.0));
effect.setUniform(this.shader, 'uSparkleRot', effect.readConfig('SparkleRotation', 1.0));
effect.setUniform(this.shader, 'uSparkleSize', effect.readConfig('SparkleSize', 1.0));
