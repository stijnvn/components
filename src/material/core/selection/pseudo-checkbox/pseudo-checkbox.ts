/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Component,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy,
  Inject,
  Optional,
} from '@angular/core';
import {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';

/**
 * Possible states for a pseudo checkbox.
 * @docs-private
 */
export type MatPseudoCheckboxState = 'unchecked' | 'checked' | 'indeterminate';

/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mat-pseudo-checkbox',
  styleUrls: ['pseudo-checkbox.css'],
  template: '',
  host: {
    'class': 'mat-pseudo-checkbox',
    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
    '[class.mat-pseudo-checkbox-minimal]': 'appearance === "minimal"',
    '[class.mat-pseudo-checkbox-full]': 'appearance === "full"',
    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
  },
  standalone: true,
})
export class MatPseudoCheckbox {
  /** Display state of the checkbox. */
  @Input() state: MatPseudoCheckboxState = 'unchecked';

  /** Whether the checkbox is disabled. */
  @Input() disabled: boolean = false;

  /**
   * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
   * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
   */
  @Input() appearance: 'minimal' | 'full' = 'full';

  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode?: string) {}
}
