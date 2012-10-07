var demographics = {
  northeast: {
    ME: 1,
    NH: 1,
    VT: 1,
    MA: 1,
    RI: 1,
    CT: 1,
    NY: 1,
    PA: 1,
    DE: 1,
    MD: 1,
    DC: 1,
    NJ: 1
  },
  midwest: {
    WI: 1,
    MI: 1,
    IL: 1,
    IN: 1,
    OH: 1,
    MO: 1,
    ND: 1,
    SD: 1,
    NE: 1,
    KS: 1,
    MN: 1,
    IA: 1
  },
  south: {
    VA: 1,
    WV: 1,
    NC: 1,
    SC: 1,
    GA: 1,
    FL: 1,
    KY: 1,
    TN: 1,
    MS: 1,
    AL: 1,
    AR: 1,
    LA: 1
  },
  west: {
    OK: 1,
    TX: 1,
    ID: 1,
    MT: 1,
    WY: 1,
    NV: 1,
    UT: 1,
    CO: 1,
    AZ: 1,
    NM: 1,
    AK: 1,
    WA: 1,
    OR: 1,
    CA: 1,
    HI: 1
  },
  unemployment: {
    ND: .03,
    NE: .04,
    SD: .045,
    OK: .051,
    VT: .053,
    IA: .055,
    NH: .057,
    WY: .057,
    UT: .058,
    MN: .059,
    VA: .059,
    HI: .061,
    KS: .062,
    MA: .063,
    MT: .063,
    NM: .065,
    DE: .069,
    MD: .071,
    TX: .071,
    MO: .072,
    OH: .072,
    AR: .073,
    ID: .074,
    LA: .074,
    WV: .075,
    WI: .075,
    ME: .076,
    AK: .078,
    PA: .081,
    CO: .082,
    AZ: .083,
    IN: .083,
    AL: .085,
    KY: .085,
    TN: .085,
    WA: .086,
    DC: .088,
    FL: .088,
    OR: .089,
    CT: .09,
    IL: .091,
    MS: .091,
    NY: .091,
    GA: .092,
    MI: .094,
    SC: .096,
    NC: .096,
    NJ: .099,
    CA: .106,
    RI: .107,
    NV: .121
  },
  poverty: {
    NH: .056,
    NJ: .068,
    VT: .076,
    MN: .081,
    HI: .086,
    DE: .092,
    UT: .092,
    VA: .092,
    CT: .093,
    NE: .095,
    MD: .097,
    ID: .099,
    AK: .100,
    MA: .101,
    WA: .102,
    WI: .102,
    NV: .106,
    WY: .106,
    FL: .111,
    ND: .112,
    PA: .112,
    IA: .113,
    CO: .114,
    IL: .115,
    MO: .116,
    SD: .118,
    MI: .120,
    OR: .120,
    RI: .121,
    OH: .123,
    KS: .125,
    IN: .126,
    ME: .126,
    NC: .131,
    CA: .132,
    MT: .138,
    GA: .144,
    NY: .145,
    KY: .148,
    TN: .150,
    SC: .150,
    AZ: .152,
    WV: .154,
    OK: .156,
    AR: .159,
    TX: .162,
    AL: .167,
    NM: .179,
    LA: .183,
    MS: .201,
    DC: .213
  },
  per_capita: {
    AL: .039,
    AK: .142,
    AZ: .050,
    AR: .031,
    CA: .131,
    CO: .128,
    CT: .260,
    DE: .099,
    DC: .410,
    FL: .092,
    GA: .054,
    HI: .110,
    ID: .022,
    IL: .131,
    IN: .049,
    IA: .082,
    KS: .097,
    KY: .033,
    LA: .084,
    ME: .073,
    MD: .190,
    MA: .215,
    MI: .055,
    MN: .128,
    MS: .011,
    MO: .069,
    MT: .053,
    NE: .095,
    NV: .069,
    NH: .140,
    NJ: .207,
    NM: .038,
    NY: .188,
    NC: .056,
    ND: .105,
    OH: .064,
    OK: .064,
    OR: .070,
    PA: .111,
    RI: .125,
    SC: .031,
    SD: .038,
    TN: .053,
    TX: .094,
    UT: .025,
    VT: .102,
    VA: .147,
    WA: .135,
    WV: .026,
    WI: .084,
    WY: .178
  },
  white: {
    AL: .68,
    AK: .68,
    AZ: .55,
    AR: .75,
    CA: .40,
    CO: .72,
    CT: .72,
    DE: .65,
    DC: .35,
    FL: .59,
    GA: .57,
    HI: .17,
    ID: .82,
    IL: .64,
    IN: .83,
    IA: .87,
    KS: .78,
    KY: .86,
    LA: .62,
    ME: .95,
    MD: .54,
    MA: .76,
    MI: .76,
    MN: .83,
    MS: .59,
    MO: .81,
    MT: .88,
    NE: .79,
    NV: .53,
    NH: .93,
    NJ: .58,
    NM: .41,
    NY: .57,
    NC: .65,
    ND: .84,
    OH: .81,
    OK: .65,
    OR: .80,
    PA: .80,
    RI: .76,
    SC: .66,
    SD: .84,
    TN: .76,
    TX: .42,
    UT: .82,
    VT: .94,
    VA: .65,
    WA: .70,
    WV: .94,
    WI: .83,
    WY: .86
  },
  black: {
    AL: .26,
    AK: .02,
    AZ: .04,
    AR: .15,
    CA: .06,
    CO: .04,
    CT: .09,
    DE: .20,
    DC: .49,
    FL: .15,
    GA: .29,
    HI: .01,
    ID: 0,
    IL: .14,
    IN: .09,
    IA: .03,
    KS: .06,
    KY: .07,
    LA: .32,
    ME: .01,
    MD: .28,
    MA: .06,
    MI: .14,
    MN: .05,
    MS: .37,
    MO: .11,
    MT: 0,
    NE: .04,
    NV: .08,
    NH: .01,
    NJ: .13,
    NM: 0,
    NY: .14,
    NC: .21,
    ND: .01,
    OH: .12,
    OK: .07,
    OR: .02,
    PA: .10,
    RI: .06,
    SC: .28,
    SD: .01,
    TN: .16,
    TX: .12,
    UT: .01,
    VT: .01,
    VA: .19,
    WA: .03,
    WV: .03,
    WI: .05,
    WY: 0
  },
  hispanic: {
    AL: .03,
    AK: .07,
    AZ: .33,
    AR: .05,
    CA: .39,
    CO: .19,
    CT: .12,
    DE: .09,
    DC: .11,
    FL: .22,
    GA: .09,
    HI: .12,
    ID: .13,
    IL: .15,
    IN: .04,
    IA: .06,
    KS: .09,
    KY: .04,
    LA: .04,
    ME: .01,
    MD: .09,
    MA: .10,
    MI: .05,
    MN: .05,
    MS: .02,
    MO: .03,
    MT: .03,
    NE: .11,
    NV: .26,
    NH: .02,
    NJ: .21,
    NM: .45,
    NY: .18,
    NC: .08,
    ND: .02,
    OH: .03,
    OK: .08,
    OR: .09,
    PA: .06,
    RI: .13,
    SC: .04,
    SD: .04,
    TN: .04,
    TX: .40,
    UT: .11,
    VT: .01,
    VA: .08,
    WA: .12,
    WV: 0,
    WI: .06,
    WY: .09
  },
  protestant: {"convert": true,"Maine":0.469,"New Hampshire":0.37,"Vermont":0.45799999999999996,"Massachusetts":0.26899999999999996,"Rhode Island":0.316,"Connecticut":0.31,"New York":0.331,"New Jersey":0.3,"Pennsylvania":0.505,"Maryland":0.493,"Delaware":0.515,"West Virginia":0.754,"District of Columbia":0.342,"Ohio":0.525,"Michigan":0.523,"Indiana":0.593,"Illinois":0.483,"Wisconsin":0.456,"Minnesota":0.526,"Iowa":0.635,"Missouri":0.591,"North Dakota":0.5720000000000001,"South Dakota":0.588,"Nebraska":0.58,"Kansas":0.619,"Virginia":0.613,"North Carolina":0.6990000000000001,"South Carolina":0.7090000000000001,"Georgia":0.6829999999999999,"Florida":0.49700000000000005,"Kentucky":0.654,"Tennessee":0.721,"Alabama":0.758,"Mississippi":0.7490000000000001,"Arkansas":0.701,"Louisiana":0.519,"Oklahoma":0.674,"Texas":0.597,"Montana":0.529,"Arizona":0.431,"Colorado":0.47200000000000003,"Idaho":0.34,"Wyoming":0.563,"Utah":0.12300000000000001,"Nevada":0.34700000000000003,"New Mexico":0.461,"California":0.39299999999999996,"Oregon":0.494,"Washington":0.486},
  catholic: {"convert":true,"Maine":0.305,"New Hampshire":0.382,"Vermont":0.315,"Massachusetts":0.48,"Rhode Island":0.515,"Connecticut":0.457,"New York":0.395,"New Jersey":0.45899999999999996,"Pennsylvania":0.301,"Maryland":0.254,"Delaware":0.28800000000000003,"West Virginia":0.07,"District of Columbia":0.196,"Ohio":0.248,"Michigan":0.244,"Indiana":0.182,"Illinois":0.314,"Wisconsin":0.344,"Minnesota":0.287,"Iowa":0.195,"Missouri":0.18899999999999997,"North Dakota":0.28,"South Dakota":0.239,"Nebraska":0.247,"Kansas":0.204,"Virginia":0.18100000000000002,"North Carolina":0.085,"South Carolina":0.084,"Georgia":0.10800000000000001,"Florida":0.245,"Kentucky":0.146,"Tennessee":0.077,"Alabama":0.066,"Mississippi":0.064,"Arkansas":0.07400000000000001,"Louisiana":0.32899999999999996,"Oklahoma":0.113,"Texas":0.205,"Montana":0.23600000000000002,"Arizona":0.252,"Colorado":0.222,"Idaho":0.14400000000000002,"Wyoming":0.158,"Utah":0.07200000000000001,"Nevada":0.264,"New Mexico":0.316,"California":0.27,"Oregon":0.159,"Washington":0.17600000000000002},
  mormon: {"convert":true,"Maine":0.005,"New Hampshire":0.002,"Vermont":0.003,"Massachusetts":0.001,"Rhode Island":0,"Connecticut":0.003,"New York":0.002,"New Jersey":0.003,"Pennsylvania":0.003,"Maryland":0.011000000000000001,"Delaware":0.006,"West Virginia":0.004,"District of Columbia":0,"Ohio":0.004,"Michigan":0.004,"Indiana":0.008,"Illinois":0.003,"Wisconsin":0.006999999999999999,"Minnesota":0.004,"Iowa":0.006999999999999999,"Missouri":0.009000000000000001,"North Dakota":0.012,"South Dakota":0,"Nebraska":0.02,"Kansas":0.005,"Virginia":0.008,"North Carolina":0.006,"South Carolina":0.006,"Georgia":0.004,"Florida":0.006,"Kentucky":0.008,"Tennessee":0.004,"Alabama":0.005,"Mississippi":0.009000000000000001,"Arkansas":0.012,"Louisiana":0.001,"Oklahoma":0.015,"Texas":0.009000000000000001,"Montana":0.043,"Arizona":0.054000000000000006,"Colorado":0.017,"Idaho":0.20600000000000002,"Wyoming":0.094,"Utah":0.665,"Nevada":0.091,"New Mexico":0.027999999999999997,"California":0.018000000000000002,"Oregon":0.026000000000000002,"Washington":0.037000000000000005},
  judaism: {"convert":true,"Maine":0.012,"New Hampshire":0.024,"Vermont":0.028999999999999998,"Massachusetts":0.042,"Rhode Island":0.021,"Connecticut":0.028999999999999998,"New York":0.067,"New Jersey":0.055999999999999994,"Pennsylvania":0.019,"Maryland":0.039,"Delaware":0.018000000000000002,"West Virginia":0.002,"District of Columbia":0.109,"Ohio":0.006999999999999999,"Michigan":0.006999999999999999,"Indiana":0.006999999999999999,"Illinois":0.022000000000000002,"Wisconsin":0.005,"Minnesota":0.012,"Iowa":0.001,"Missouri":0.006999999999999999,"North Dakota":0,"South Dakota":0,"Nebraska":0.006999999999999999,"Kansas":0.006999999999999999,"Virginia":0.012,"North Carolina":0.004,"South Carolina":0.006999999999999999,"Georgia":0.012,"Florida":0.040999999999999995,"Kentucky":0.003,"Tennessee":0.008,"Alabama":0.006,"Mississippi":0.004,"Arkansas":0.002,"Louisiana":0.004,"Oklahoma":0.001,"Texas":0.006999999999999999,"Montana":0,"Arizona":0.015,"Colorado":0.017,"Idaho":0,"Wyoming":0,"Utah":0.001,"Nevada":0.025,"New Mexico":0.009000000000000001,"California":0.027000000000000003,"Oregon":0.005,"Washington":0.006999999999999999},
  other: {"convert":true,"Maine":0.14400000000000002,"New Hampshire":0.129,"Vermont":0.086,"Massachusetts":0.10800000000000001,"Rhode Island":0.067,"Connecticut":0.10300000000000001,"New York":0.092,"New Jersey":0.073,"Pennsylvania":0.078,"Maryland":0.085,"Delaware":0.10400000000000001,"West Virginia":0.064,"District of Columbia":0.14400000000000002,"Ohio":0.09699999999999999,"Michigan":0.11,"Indiana":0.099,"Illinois":0.07400000000000001,"Wisconsin":0.092,"Minnesota":0.07,"Iowa":0.079,"Missouri":0.084,"North Dakota":0.05,"South Dakota":0.067,"Nebraska":0.081,"Kansas":0.065,"Virginia":0.075,"North Carolina":0.073,"South Carolina":0.061,"Georgia":0.073,"Florida":0.09,"Kentucky":0.079,"Tennessee":0.052000000000000005,"Alabama":0.055999999999999994,"Mississippi":0.035,"Arkansas":0.079,"Louisiana":0.045,"Oklahoma":0.057,"Texas":0.064,"Montana":0.11199999999999999,"Arizona":0.115,"Colorado":0.14800000000000002,"Idaho":0.16899999999999998,"Wyoming":0.092,"Utah":0.07200000000000001,"Nevada":0.127,"New Mexico":0.092,"California":0.14400000000000002,"Oregon":0.179,"Washington":0.156},
  reg_dem: {
    AL: .34,
    AK: .15,
    AZ: .32,
    AR: .41,
    CA: .44,
    CO: .33,
    CT: .37,
    DE: .47,
    FL: .41,
    GA: .32,
    HI: .40,
    ID: .22,
    IL: .46,
    IN: .32,
    IA: .31,
    KS: .27,
    KY: .56,
    LA: .51,
    ME: .33,
    MD: .56,
    MA: .37,
    MI: .40,
    MN: .46,
    MS: .38,
    MO: .37,
    MT: .32,
    NE: .34,
    NV: .42,
    NH: .29,
    NJ: .33,
    NM: .48,
    NY: .49,
    NC: .45,
    ND: .29,
    OH: .36,
    OK: .49,
    OR: .42,
    PA: .51,
    RI: .38,
    SC: .33,
    SD: .38,
    TN: .34,
    TX: .21,
    UT: .20,
    VT: .29,
    VA: .36,
    WA: .39,
    WV: .54,
    WI: .38,
    WY: .24
  },
  reg_rep: {
    AL: .48,
    AK: .26,
    AZ: .36,
    AR: .31,
    CA: .31,
    CO: .35,
    CT: .20,
    DE: .29,
    FL: .36,
    GA: .44,
    HI: .23,
    ID: .50,
    IL: .31,
    IN: .46,
    IA: .32,
    KS: .44,
    KY: .37,
    LA: .26,
    ME: .28,
    MD: .27,
    MA: .11,
    MI: .33,
    MN: .30,
    MS: .47,
    MO: .39,
    MT: .39,
    NE: .48,
    NV: .37,
    NH: .29,
    NJ: .20,
    NM: .32,
    NY: .25,
    NC: .32,
    ND: .38,
    OH: .37,
    OK: .40,
    OR: .32,
    PA: .37,
    RI: .11,
    SC: .44,
    SD: .46,
    TN: .38,
    TX: .45,
    UT: .56,
    VT: .27,
    VA: .39,
    WA: .29,
    WV: .29,
    WI: .34,
    WY: .63
  }
}