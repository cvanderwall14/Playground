
/**
 * @name Playground
 * @author Christian Vanderwall
 */

import Debug from 'debug'
import { sin, saw, ramp, tri, sqr, pulse, noise } from 'opendsp/osc';

// Master volume
var amp = "======".length*.1

export function dsp(t) {
  
  var dec = t - Math.floor(t);

  if (dec <= .05) {
    return ( sin(t,440) ) * amp;
  } else {
    return 0;
  }
}
