/*
 * @japa/spec-reporter
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { SpecReporter } from './src/Reporter'
export { SpecReporter }

/**
 * Spec reporter function
 */
export function specReporter() {
  const reporter = new SpecReporter()
  return reporter.open.bind(reporter)
}
