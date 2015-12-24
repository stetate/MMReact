// Utility functions for Messier Marathon Planner.
// Copyright (c) 2005,2006 by Larry McNish. All Rights Reserved,
// I accept no liability for any errors in my coding but please let me know of any errors you find.
// V1.2 Aug 2005
// V1.3 March 2006

// initialize global array variables only once
var Mno = new Array(110);
for (i = 1; i <= 110; i++) {
    Mno[i - 1] = i
};
var NGC = new Array('1952', '7089', '5272', '6121', '5904', '6405', '6475', '6523', '6333', '6254', '6705', '6218', '6205', '6402', '7078', '6611', '6618', '6613', '6273', '6514', '6531', '6656', '6494', '>6603', 'IC4725', '6694', '6853', '6626', '6913', '7099', '224', '221', '598', '1039', '2168', '1960', '2099', '1912', '7092', 'Win4', '2287', '1976', '1982', '2632', '----', '2437', '2422', '2548', '4472', '2323', '5194', '7654', '5024', '6715', '6809', '6779', '6720', '4579', '4621', '4649', '4303', '6266', '5055', '4826', '3623', '3627', '2682', '4590', '6637', '6681', '6838', '6981', '6994', '628', '6864', '650', '1068', '2068', '1904', '6093', '3031', '3034', '5236', '4374', '4382', '4406', '4486', '4501', '4552', '4569', '4548', '6341', '2447', '4736', '3351', '3368', '3587', '4192', '4254', '4321', '5457', '5866?', '581', '4594', '3379', '4258', '6171', '3556', '3992', '205');
var DECdeg = new Array('+22', '-00', '+28', '-26', '+02', '-32', '-34', '-24', '-18', '-04', '-06', '-01', '+36', '-03', '+12', '-13', '-16', '-17', '-26', '-23', '-22', '-23', '-19', '-18', '-19', '-09', '+22', '-24', '+38', '-23', '+41', '+40', '+30', '+42', '+24', '+34', '+32', '+35', '+48', '+58', '-20', '-05', '-05', '+19', '+24', '-14', '-14', '-05', '+08', '-08', '+47', '+61', '+18', '-30', '-30', '+30', '+33', '+11', '+11', '+11', '+04', '-30', '+42', '+21', '+13', '+12', '+11', '-26', '-32', '-32', '+18', '-12', '-12', '+15', '-21', '+51', '-00', '+00', '-24', '-22', '+69', '+69', '-29', '+12', '+18', '+12', '+12', '+14', '+12', '+13', '+14', '+43', '-23', '+41', '+11', '+11', '+55', '+14', '+14', '+15', '+54', '+55', '+60', '-11', '+12', '+47', '-13', '+55', '+53', '+41');
var DECmns = new Array('01', '49', '23', '32', '05', '13', '49', '23', '31', '06', '16', '57', '28', '15', '10', '58', '11', '08', '16', '02', '30', '54', '01', '50', '15', '24', '43', '52', '32', '11', '16', '52', '39', '47', '20', '08', '33', '50', '26', '05', '44', '27', '16', '59', '07', '49', '30', '48', '00', '20', '12', '35', '10', '29', '58', '11', '02', '49', '39', '33', '28', '07', '02', '41', '05', '59', '49', '45', '21', '18', '47', '32', '38', '47', '55', '34', '01', '03', '33', '59', '04', '41', '52', '53', '11', '57', '24', '25', '33', '10', '30', '08', '52', '07', '42', '49', '01', '54', '25', '49', '21', '46', '42', '37', '35', '18', '03', '40', '23', '41');
var Cons = new Array('Tau', 'Aqr', 'CVn', 'Sco', 'Ser', 'Sco', 'Sco', 'Sgr', 'Oph', 'Oph', 'Sct', 'Oph', 'Her', 'Oph', 'Peg', 'Ser', 'Sgr', 'Sgr', 'Oph', 'Sgr', 'Sgr', 'Sgr', 'Sgr', 'Sgr', 'Sgr', 'Sct', 'Vul', 'Sgr', 'Cyg', 'Cap', 'And', 'And', 'Tri', 'Per', 'Gem', 'Aur', 'Aur', 'Aur', 'Cyg', 'UMa', 'CMa', 'Ori', 'Ori', 'Cnc', 'Tau', 'Pup', 'Pup', 'Hya', 'Vir', 'Mon', 'CVn', 'Cas', 'Com', 'Sgr', 'Sgr', 'Lyr', 'Lyr', 'Vir', 'Vir', 'Vir', 'Vir', 'Oph', 'CVn', 'Com', 'Leo', 'Leo', 'Cnc', 'Hya', 'Sgr', 'Sgr', 'Sge', 'Aqr', 'Aqr', 'Psc', 'Sgr', 'Per', 'Cet', 'Ori', 'Lep', 'Sco', 'UMa', 'UMa', 'Hya', 'Vir', 'Com', 'Vir', 'Vir', 'Com', 'Vir', 'Vir', 'Com', 'Her', 'Pup', 'CVn', 'Leo', 'Leo', 'UMa', 'Com', 'Com', 'Com', 'UMa', 'Dra', 'Cas', 'Vir', 'Leo', 'CVn', 'Oph', 'UMa', 'UMa', 'And');
var Mtyp = new Array('SNR', 'GC', 'GC', 'GC', 'GC', 'OC', 'OC', 'EN', 'GC', 'GC', 'OC', 'GC', 'GC', 'GC', 'GC', 'EN+OC', 'EN', 'OC', 'GC', 'E/RN', 'OC', 'GC', 'OC', 'starcloud', 'OC', 'OC', 'PN', 'GC', 'OC', 'GC', 'G-SAb', 'G-E5pec', 'G-SAcd', 'OC', 'OC', 'OC', 'OC', 'OC', 'OC', 'OC 2 stars', 'OC', 'E/RN', 'E/RN', 'OC', 'OC', 'OC', 'OC', 'OC', 'G-E2', 'OC', 'G-SAbc', 'OC', 'GC', 'GC', 'GC', 'GC', 'PN', 'G-SABb', 'G-E5', 'G-E2', 'G-SABbc', 'GC', 'G-SAbc', 'G-SAab', 'G-SABa', 'G-SABb', 'OC', 'GC', 'GC', 'GC', 'GC', 'GC', 'OC 4 stars', 'G-SAc', 'GC', 'PN', 'G-SABab', 'RN', 'GC', 'GC', 'G-SAab', 'G-I0', 'G-SABc', 'G-E1', 'G-SA0*', 'G-E3', 'G-E0-1', 'G-SAb', 'G-E', 'G-SABab', 'G-SBb', 'GC', 'OC', 'G-SAab', 'G-SBb', 'G-SABab', 'PN', 'G-SABab', 'G-SAc', 'G-SABbc', 'G-SABcd', 'G-SA0*', 'OC', 'G-SA', 'G-E1', 'G-SABbc', 'GC', 'G-SBcd', 'G-SBbc', 'G-E3pec');
var RAhrs = new Array('05', '21', '13', '16', '15', '17', '17', '18', '17', '16', '18', '16', '16', '17', '21', '18', '18', '18', '17', '18', '18', '18', '17', '18', '18', '18', '19', '18', '20', '21', '00', '00', '01', '02', '06', '05', '05', '05', '21', '12', '06', '05', '05', '08', '03', '07', '07', '08', '12', '07', '13', '23', '13', '18', '19', '19', '18', '12', '12', '12', '12', '17', '13', '12', '11', '11', '08', '12', '18', '18', '19', '20', '20', '01', '20', '01', '02', '05', '05', '16', '09', '09', '13', '12', '12', '12', '12', '12', '12', '12', '12', '17', '07', '12', '10', '10', '11', '12', '12', '12', '14', '15', '01', '12', '10', '12', '16', '11', '11', '00');
var RAmns = new Array('34.5', '33.5', '42.2', '23.6', '18.6', '40.1', '53.9', '03.8', '19.2', '57.1', '51.1', '47.2', '41.7', '37.6', '30.0', '18.6', '20.8', '19.9', '02.6', '02.3', '04.6', '36.4', '56.8', '16.5', '31.6', '45.2', '59.6', '24.5', '23.9', '40.4', '42.7', '42.7', '33.9', '42.0', '08.9', '36.1', '52.4', '28.7', '32.2', '22.4', '47.0', '35.4', '35.6', '40.1', '47.0', '41.8', '36.6', '13.8', '29.8', '03.2', '29.9', '24.2', '12.9', '55.1', '40.0', '16.6', '53.6', '37.7', '42.0', '43.7', '21.9', '01.2', '15.8', '56.7', '18.9', '20.2', '50.4', '39.5', '31.4', '43.2', '53.8', '53.5', '59.0', '36.7', '06.1', '42.4', '42.7', '46.7', '24.5', '17.0', '55.6', '55.8', '37.0', '25.1', '25.4', '26.2', '30.8', '32.0', '35.7', '36.8', '35.4', '17.1', '44.6', '50.9', '44.0', '46.8', '14.8', '13.8', '18.8', '22.9', '03.2', '06.5', '33.2', '40.0', '47.8', '19.0', '32.5', '11.5', '57.6', '40.4');
var Mv = new Array(8.2, 6.3, 6.3, 6.4, 6.2, 5.3, 4.1, 6.0, 7.3, 6.7, 6.3, 6.6, 5.7, 7.7, 6.0, 6.4, 7.5, 7.5, 6.6, 9.0, 6.5, 5.9, 6.9, 4.6, 6.5, 9.3, 7.4, 7.3, 7.1, 8.4, 4.8, 8.7, 6.7, 5.5, 5.3, 6.3, 6.2, 7.4, 5.2, 9.1, 4.6, 4.0, 9.1, 3.7, 1.6, 6.0, 4.5, 5.3, 8.5, 6.3, 8.1, 7.3, 7.6, 8.0, 5.0, 8.2, 8.8, 9.2, 9.6, 8.9, 10.1, 6.6, 9.5, 8.8, 9.3, 8.2, 6.1, 8.0, 8.9, 9.6, 9.0, 9.8, 9.0, 10.2, 8.0, 10.1, 8.9, 10.3, 8.4, 7.7, 7.9, 8.8, 7.6, 9.3, 9.3, 9.7, 9.2, 10.2, 9.5, 10.0, 9.5, 6.5, 6.0, 7.9, 10.4, 9.1, 9.9, 11.7, 10.1, 10.6, 9.6, 10.0, 7.4, 8.7, 9.2, 8.6, 9.2, 10.7, 10.8, 9.4);
var Size = new Array('6x4', '12.9', '16.2', '26.3', '17.4', '15.0', '80.0', '60x35', '9.3', '15.1', '14.0', '14.5', '16.6', '11.7', '12.3', '7.0', '11.0', '9.0', '13.5', '28.0', '13.0', '24.0', '27.0', '5.0', '40.0', '15.0', '8.0x5.7', '11.2', '7.0', '11.0', '178', '8x6', '73x45', '35.0', '28.0', '12.0', '24.0', '21.0', '32.0', '0.8', '38.0', '85x60', '20x15', '95.0', '110.0', '27.0', '30.0', '54.0', '9x7.5', '16.0', '11x7', '13.0', '12.6', '9.1', '19.0', '7.1', '1.4x1.0', '5.5x4.5', '5x3.5', '7x6', '6x5.5', '14.1', '10x6', '9.3x5.4', '8x1.5', '8x2.5', '30.0', '12.0', '7.1', '7.8', '7.2', '5.9', '2.8', '10.2x9.5', '6.0', '2.7x1.8', '7x6', '8x6', '8.7', '8.9', '21x10', '9x4', '11x10', '5.0', '7.1x5.2', '7.5x5.5', '7.0', '7x4', '4.0', '9.5x4.5', '5.4x4.4', '11.2', '22.0', '7x3', '4.4x3.3', '6x4', '3.4x3.3', '9.5x3.2', '5.4x4.8', '7x6', '22.0', '5.2x2.3', '6.0', '9x4', '2.0', '19x8', '10.0', '8x1', '7x4', '17x10');
var Dist = new Array('6.3', '36.2', '30.6', '6.8', '22.8', '2', '1', '6.5', '26.4', '13.4', '6', '17.6', '22.2', '27.4', '32.6', '7', '5', '6', '27.1', '2.2', '4.25', '10.1', '4.5', '10', '2', '5', '1.25', '17.9', '7.2', '24.8', '2200', '2200', '2300', '1.4', '2.8', '4.1', '4.6', '4.2', '0.825', '0.51', '2.4', '1.6', '1.6', '0.5', '0.4', '5.4', '1.6', '1.5', '60000', '3', '37000', '7', '56.4', '82.8', '16.6', '31.6', '4.1', '60000', '60000', '60000', '60000', '21.5', '37000', '19000', '35000', '35000', '2.25', '32.3', '25.4', '28.0', '11.7', '52.8', '?', '?', '57.7', '3.4', '60000', '1.6', '39.8', '27.4', '12000', '12000', '10000', '60000', '60000', '60000', '60000', '60000', '60000', '60000', '60000', '26.1', '4.5', '14500', '38000', '38000', '2.6', '60000', '60000', '60000', '24000', '40000', '8', '50000', '38000', '25000', '19.6', '45000', '55000', '2200');
var PHo = new Array(45, 42, 43, 41, 35, 31, 32, 110, 77, 33, 79, 74, 76, 52, 103, 34, 38, 36, 37, 1, 78, 50, 47, 46, 93, 48, 44, 67, 81, 82, 108, 97, 109, 40, 106, 94, 63, 51, 101, 95, 96, 105, 65, 66, 98, 99, 100, 85, 60, 59, 58, 89, 87, 84, 86, 90, 91, 88, 49, 61, 53, 64, 3, 104, 68, 83, 5, 102, 13, 92, 12, 10, 14, 107, 4, 80, 62, 19, 9, 6, 7, 8, 20, 21, 23, 24, 18, 25, 17, 16, 22, 28, 11, 26, 57, 56, 39, 29, 27, 71, 69, 70, 54, 55, 75, 15, 2, 72, 73, 30);
var DMo = new Array(77, 74, 33, 31, 32, 110, 52, 103, 76, 34, 45, 79, 42, 43, 78, 1, 35, 37, 36, 38, 41, 93, 47, 46, 50, 48, 44, 67, 95, 96, 105, 65, 66, 81, 82, 97, 108, 109, 40, 106, 94, 63, 51, 101, 102, 53, 64, 3, 68, 83, 98, 99, 100, 85, 84, 86, 87, 89, 90, 88, 91, 58, 59, 60, 49, 61, 104, 5, 13, 92, 57, 56, 29, 39, 27, 71, 107, 12, 10, 14, 9, 4, 80, 19, 62, 6, 7, 11, 26, 16, 17, 18, 24, 25, 23, 21, 20, 8, 28, 22, 69, 70, 54, 55, 75, 15, 2, 72, 73, 30);
var ETo = new Array(77, 74, 33, 31, 32, 110, 52, 103, 76, 34, 45, 79, 42, 43, 78, 1, 35, 37, 36, 38, 41, 93, 47, 46, 50, 48, 44, 67, 95, 96, 105, 65, 66, 81, 82, 97, 108, 109, 40, 106, 94, 63, 51, 101, 102, 53, 64, 3, 68, 83, 98, 99, 100, 85, 84, 86, 87, 89, 90, 88, 91, 58, 59, 60, 49, 61, 104, 5, 13, 92, 57, 56, 29, 39, 27, 71, 107, 12, 10, 14, 9, 4, 80, 19, 62, 6, 7, 11, 26, 16, 17, 18, 24, 25, 23, 21, 20, 8, 28, 22, 69, 70, 54, 55, 75, 15, 2, 72, 73, 30);
var TLo = new Array(74, 77, 33, 31, 110, 32, 52, 103, 76, 34, 45, 79, 41, 93, 47, 46, 50, 48, 42, 43, 78, 35, 1, 37, 36, 38, 44, 67, 95, 96, 105, 65, 66, 64, 53, 85, 100, 98, 99, 84, 86, 87, 58, 59, 60, 91, 89, 90, 88, 49, 61, 104, 68, 83, 81, 82, 108, 97, 109, 40, 106, 94, 63, 51, 101, 102, 3, 5, 13, 92, 57, 56, 12, 10, 14, 107, 80, 4, 19, 62, 6, 7, 9, 11, 26, 16, 17, 18, 24, 23, 25, 21, 20, 8, 28, 22, 69, 54, 70, 71, 27, 29, 39, 15, 2, 55, 73, 72, 75, 30);
// from March 2006 Astronomy - probably (c)
var n06 = new Array(77, 74, 33, 31, 32, 110, 52, 103, 76, 34, 45, 79, 42, 43, 78, 1, 35, 37, 36, 38, 41, 93, 47, 46, 50, 48, 44, 67, 95, 96, 105, 65, 66, 81, 82, 97, 108, 109, 40, 106, 94, 63, 51, 101, 102, 53, 64, 3, 98, 99, 100, 85, 84, 86, 87, 89, 90, 88, 91, 58, 59, 60, 49, 61, 104, 68, 83, 5, 13, 92, 57, 56, 29, 39, 27, 71, 107, 12, 10, 14, 9, 4, 80, 19, 62, 6, 7, 11, 26, 16, 17, 18, 24, 25, 23, 21, 20, 8, 28, 22, 69, 70, 54, 55, 75, 15, 2, 72, 73, 30);
// Note - DMo == ETo
// Note - DMO ~= n06 except from item 48 thru 66
var RLM = new Array(79, 77, 74, 32, 110, 31, 39, 33, 42, 43, 78, 45, 76, 103, 52, 34, 1, 38, 36, 37, 35, 41, 50, 47, 46, 93, 48, 67, 44, 82, 81, 95, 96, 105, 65, 66, 108, 97, 109, 40, 106, 94, 64, 85, 98, 99, 61, 100, 84, 86, 49, 87, 88, 91, 89, 90, 58, 59, 60, 104, 68, 83, 53, 3, 63, 51, 101, 102, 5, 80, 4, 107, 13, 12, 10, 62, 19, 92, 9, 14, 6, 7, 23, 57, 56, 29, 27, 71, 15, 11, 26, 16, 17, 18, 2, 24, 25, 21, 72, 20, 73, 22, 8, 28, 75, 54, 69, 70, 55, 30);
var TC = new Array(74, 77, 33, 31, 32, 110, 52, 103, 76, 34, 45, 79, 42, 43, 78, 1, 37, 36, 38, 35, 41, 50, 47, 46, 93, 48, 44, 67, 81, 82, 108, 97, 109, 106, 40, 95, 96, 105, 65, 66, 51, 63, 101, 94, 3, 53, 64, 98, 99, 100, 85, 84, 86, 88, 91, 49, 60, 59, 58, 87, 89, 90, 61, 104, 68, 83, 102, 5, 13, 92, 12, 10, 107, 80, 4, 14, 9, 19, 62, 57, 56, 29, 39, 27, 71, 11, 26, 16, 17, 18, 24, 23, 25, 7, 6, 28, 8, 20, 21, 22, 69, 70, 54, 55, 15, 75, 72, 73, 2, 30);

// final calculations for all objects
var DECd;
var Decl = new Array(110); // array to hold items for 'sorting by Decl'
var DeclNumeric = new Array(110); // floating point +/-(dec deg + deg min) from printable versions for calculations
var RAhm = new Array(110); // array to hold items for 'sorting by RA'
var RAhmNumeric = new Array(110); // floating point RAhrs+RAmns from printable versions for calculations
for (i = 1 - 1; i <= 110 - 1; i++) {
    // set to sort by Dec including RA where lower decl (-ve) appear first followed by higher decl
    Decl[i] = DecToSortable(DECdeg[i], DECmns[i]) + RAhrs[i] + RAmns[i]; // this is a string like '0024.1 7205' (neg decl) or '0042.7+4116' (pos decl)
    // calculate floating point +/-(dec deg + deg min) from printable versions for calculations
    if (DECdeg[i] == '-00') {
        DeclNumeric[i] = ( - DECmns[i] / 60.0)
    } else {
        DECd = DECdeg[i] * 1;
        if (DECd < 0) {
            DeclNumeric[i] = (DECd - DECmns[i] / 60.0)
        } else {
            DeclNumeric[i] = (DECd + DECmns[i] / 60.0)
        }
    }
    // set to sort by RA including Dec where lower decl (-ve) appear first followed by higher decl
    RAhm[i] = RAhrs[i] + RAmns[i] + DecToSortable(DECdeg[i], DECmns[i]); // this is a string like '0024.1 7205' (neg decl) or '0042.7+4116' (pos decl)
    // calculate floating point RAhrs+RAmns from printable versions for calculations
    RAhmNumeric[i] = (RAhrs[i] * 1 + RAmns[i] / 60.0)
}

var Rems = new Array("!! The famous Crab Nebula - the brightest example of a supernova remnant, formed in 1054 and still expanding. The only SNR Messier object.", "A bright globular cluster but a 20-cm telescope is needed to resolve the stars.", "!! A bright globular cluster, visible in binoculars - contains many variable stars.", "A bright globular cluster near Antares. One of the most easily resolved globular clusters, having a loose, unconcentrated structure.", "!! One of the finest globulars - should be 'naked eye' under good skies. (In Serpens Caput.)", "!! The Butterfly Cluster - best at low power. Can be difficult from northern latitudes due to its low Declination.", "!! A bright open cluster excellent in binocular or rich-field scope. Can be difficult from northern latitudes due to its low Declination - it is the Most southerly Messier (next is M69).", "!! The Lagoon Nebula with embedded open cluster NGC 6530.", "The smallest of the Ophiuchus globulars.", "A rich cluster with M12 3&deg; NW.", "!! The Wild Duck Cluster - perhaps the best open cluster.", "A loose globular cluster.", "!! The Hercules cluster - one of the finest globulars in the northern hemisphere. It is visible to the naked eye from a dark site. NGC 6207 is 1/2&deg; NE.", "A 20-cm telescope is needed to resolve the stars.", "A very rich, tightly packed globular with a very bright core.", "18.8ram? 47decm? The Eagle Nebula with an embedded open cluster - use a nebula filter. (In Serpens Cauda.)", "!! The Swan or Omega Nebula - very high surface brightness - use nebula filter.", "A small open cluster of 12 stars, 1&deg; S of M17. Gets 'lost' in scopes, due to the high number of background stars.", "An oblate cluster with M62 4&deg; S.", "2.6ram? !! The Trifid Nebula - emission and reflection nebula. Observing the trisecting dark lanes requires fairly good skies.", "A sparse cluster 0.7&deg; NE of M20.", "A spectacular globular from southern latitudes.", "A bright loose cluster.", "16.9ram? 29decm? 27decm? The 'Small Sagittarius Star Cloud' - a naked eye detached section of the milky way - contains open cluster NGC 6603.", "A bright but sparse cluster.", "A bright coarse cluster.", "!! The Dumbbell Nebula - one of the brightest planetary nebula, it is easily visible in a finder scope or binoculars - a superb object.", "A compact globular near M22,", "A small, poor open cluster 2&deg; S of gamma Cygni.", "A compact globular cluster. The toughest object (and usually the last one) in a one-night Messier marathon for northern observers due to its low altitude at sunrise in March. M30 cannot be viewed in March for observers above 35&deg; N. (There is a 103.8 minute RA gap between M30 and M52 and a 3.0 hour RA gap between M30 and M110.)", "!! The Andromeda Galaxy - the brightest galaxy in the sky, 4&deg; wide. Look for dust lanes. (The smallest Messier RA gap is between M31 and M32.)", "The closest companion to M31 - located slightly S of M31 and visible in the same low power field. (The smallest Messier RA gap is between M31 and M32.)", "A large diffuse spiral - requires a dark sky. This face-on spiral can be difficult to see due to it's large size. Use low power (may be easier to spot in finder or binoculars).", "A bright, rich open cluster, easily visible in binoculars - best at very low power.", "!! Gemini's finest open cluster, visible to the naked eye under good conditions. (Look for small cluster NGC 2158 1/4&deg; SW.)", "A bright, easy, scattered open cluster. Naked eye from a dark location. Best at low power.", "!! The finest of the 3 Auriga clusters - very rich.", "28.4ram? The faintest of Auriga's Messier clusters. Many bright stars, arranged in pairs. (Look for the small cluster NGC 1907 1/2&deg; S.)", "A very sparse cluster near pi Cygni - use low power.", "The double star Winnecke 4 - separation of 50 arc seconds near Megrez in the Big Dipper. The most disappointing of the Messier objects.", "46ram? 4&deg; The finest open cluster in Canis Major - bright but coarse, about 4&deg; south of Sirius. Easily visible in binoculars, or to the naked eye from a dark site.", "!! The famous 'Orion Nebula' - the brightest and easiest to find emission nebula in the winter sky - a magnificent object - this nebula will fill a low power eyepiece field of view.", "A fainter, detached part of Orion Nebula resembling a bloated coma. In the same field as M42.", "!! The Beehive Cluster or 'Praesepe' - appears as a hazy patch of light. Use low power for a wide field.", "!! The 'Pleiades' or 'Seven Sisters' star cluster. Very bright and large. Use low power and look for nebulosity. The closest Messier. (There is a 64.3 minute RA gap between M77 and M45 and a 97.5 minute RA gap between M45 and M79, or, if you observe bright M45 out of RA sequence, a total of a 161.8 minute RA gap between M77 and M79 - the second largest Messier RA gap.)", "!! Contains planetary nebula NGC 2438.", "A coarse cluster, 1.5&deg; W of M46.", "A large, sparse cluster. A former 'lost' Messier object.", "A very bright elliptical galaxy.", "A bright open cluster between Sirius and Procyon, naked eye under ideal conditions. Look for several arcs of stars, and a single red star 7 arc minutes south of the cluster's centre. Use low power.", "!! The Whirlpool Galaxy - superb in big telescopes.", "A bright, young, rich cluster - faint Bubble Nebula nearby. (Although it has the highest RA, this object is N circumpolar for latitudes above -28&deg; and can be seen at other times. There is a 103.8 minute RA gap between M52 and M30 and a 76.2 minute RA gap between M52 and M110, or, if you observe M52 out of RA sequence - a total of a 3.0 hour RA gap between M30 and M110 - the largest Messier RA gap and the main reason there is a Messier Marathon at all.) Can be difficult from southern latitudes due to its high Declination.", "A bright, but small, globular cluster. Difficult to resolve - use a 15-cm telescope and high power.", "A compact globular - not easily resolved.", "A bright, loose globular.", "A bright globular cluster within a rich star field. Difficult to resolve with small scopes.", "!! The Ring Nebula - a bright ring shaped planetary nebula. (The mag 15 central star is very tough.)", "A bright barred spiral. (M59 and M60 1&deg; E.)", "A bright elliptical galaxy paired with M60.", "A bright elliptical galaxy paired with M59 and NGC 4647.", "A face-on two-armed spiral galaxy.", "Unsymmetrical, in rich star field.", "!! The Sunflower Galaxy - bright, elongated, a bright core is visible in smaller scopes.", "!! The Black Eye Galaxy. An abnormally smooth and featureless galaxy except for a large dark dust cloud near the nucleus, which gives it the appearance of a black eye - the 'eye' needs a large aperture to resolve.", "!! A bright elongated spiral galaxyg with M65 and NGC 3628 in same field. (M66 is smaller and brighter than M65.) Very high surface brightness showing good detail in medium sized scopes.", "!! A bright spiral galaxy with M65 and NGC 3628 in same field.", "A bright open cluster. Located five times as distant as M44, one of the oldest clusters, at 3.2 billion years. Easy in binoculars or finderscope.", "15-cm telescope needed to resolve", "A small poor globular. Can be difficult from northern latitudes due to its low Declination since it is the 2nd most southerly Messier (the lowest is M7).", "A small globular 2&deg; E of M69. Can be difficult from northern latitudes due to its low Declination.", "A bright, loose globular cluster, easily resolved with larger scopes - looks like an open cluster.", "Near NGC 7009 - the Saturn Nebula. Like nearby M73, may be difficult to observe in morning twilight.", "58.9ram? This is one of the most disappointing of the Messier objects - an asterism of 4 stars. Like nearby M72, may be difficult to observe in morning twilight.", "A large, face-on, faint, illusive spiral. One of the most difficult of the Messier objects especially in small telescopes and for northern marathoners due to its low altitude at sunset in March.", "A small and distant globular - the smallest of the Messier globulars.", "1:42:17ra? The Little Dumbbell Nebula - an 11th magnitude planetary nebula. A smaller version of The 'Dumbbell Nebula' in Vulpecula. One of the toughest, faintest Messier objects.", "A bright, compact Seyfert galaxy with a star-like nucleus - use high power. The closest Messier to the ecliptic (next is M78). Tough for northern marathoners due to its low altitude at sunset in March. (There is a 64.3 minute RA gap between M77 and M45.)", "A featureless reflection nebula - one of the easiest reflection nebulas to observe. Use medium magnification, without filters. (The 2nd closest Messier to the ecliptic (closest is M77).", "A 20-cm telescope is needed to resolve the stars. Tough for northern marathoners due to its low altitude at sunset in March. (There is a 97.5 minute RA gap between M45 and M79)", "A bright but very compressed globular.", "!! A bright spiral, with M82 1/2&deg; N. (M81 is rounder and brighter than M82.) Visible in binoculars from a good viewing site. Can be difficult from southern latitudes due to its high Declination - it is the 2nd most northerly Messier (M82 is higher).", "!! The 'exploding galaxy', with M81 1/2&deg; S. Look for structure. Can be difficult from southern latitudes due to its high Declination - it is the most northerly Messier (next is M81).", "A face-on Sc spiral - large and diffuse, tough from northern latitudes.", "!! M84 and M86 are a bright pair of elliptical galaxies in the heart of the Coma-Virgo galaxy cluster. Part of the 'Markarian Chain'. Many NGC's nearby - lots to explore!", "A bright elliptically shaped, lenticular galaxy. A member of the Virgo galaxy cluster.", "!! M84 and M86 are a bright pair of elliptical galaxies in the heart of the Coma-Virgo galaxy cluster.", "Another bright elliptical galaxy. One of the largest and most luminous know galaxies, also a strong radio and X-ray source - the one with the famous jet and black hole.", "A bright multiple-arm spiral galaxy.", "An elliptical galaxy resembling M87, but smaller.", "A bright spiral galaxy, near M89.", "(Some lists say M91 is M58 or NGC 4689 (12:47.8,+13.8), not NGC 4548.)", "A bright globular cluster, almost as spectacular as M13. Stars are more compact and fainter than M13, requires more magnification and aperture to resolve. 9&deg; NE of M13. A fine object but often overlooked.", "A compact bright cluster, fairly rich.", "A bright, compact, tightly wound galaxy, with a very intense comet-like nucleus.", "A bright barred spiral with a bright central core and with M96 in the same field. (M95 can be difficult, M96 is bigger and brighter.) The bar and outer ring of material will require a large aperture and dark skies.", "A brighter barred spiral, with M95 in the same field.", "!! The Owl Nebula - a planetary nebula very close to M108. Appears brighter than 11.2 mag low surface brightness.", "An elongated, nearly edge-on spiral near star 6 Comae B. It has Low surface brightness (the faintest mv).", "A bright, circular, nearly face-on spiral near M98.", "A face-on spiral galaxy with starlike nucleus.", "!! The Pinwheel Galaxy - a large, diffuse, face-on spiral. Difficult to observe due to low surface brightness. Sky conditions are more important than aperture.", "A bright but almost featureless lenticular galaxy. Appears originally to be a duplicate observation of M101. (Look for NGC 5907 nearby.)", "A smaller open cluster. Appears triangle-shaped. (3 NGC clusters nearby). Can be difficult from southern latitudes due to its high Declination.", "!! The 'Sombrero Galaxy' features a prominent dust lane. Tilted almost edge-on.", "A small elliptical galaxy, but has very high surface brightness. Very near M95 and M96. M105 is the biggest object in a field with galaxies NGC 3384 and NGC 3389 (dimmer).", "!! A large, bright spiral galaxy.", "A small, faint globular.", "A bright, nearly edge-on spiral, very close to M97. Shows dark patches and mottling in larger scopes.", "A barred spiral near gamma UMa. Shows spiral structure easily in larger scopes.", "A companion galaxy to M31, located NNE, with lower surface brightness than M32. (There is a 76.2 minute RA gap between M110 and M52 and a 3.0 hour RA gap between M110 and M30.)");

function DOMGetElement(o) {
    if (document.getElementById) {
        // W3C DOM, Newer IE and Netscape etc.
        return document.getElementById(o);
    } else if (document.all) {
        // old Internet Explorers
        return document.all[o];
    }
    return null;
}

function IfZero(num) {
    // returns a two digit number as a 2 char string
    return ((num <= 9) ? ("0" + num) : num);
}

function left(str, n) {
    return str.slice(0, n);
}

function right(str, n) {
    return str.slice(str.length - n);
}

function DecToSortable(deg, mns) {
    // arguments and result are strings not numbers
    if (left(deg, 1) == '-') {
        // handle negative declinations
        // from string -9000, -8959, -8958, ...... -0001, -0000
        //   to string  0000,  0001,  0002, ......  8959,  9000   note blank sign: ' ' < '+'
        // no need to handle special cases of -9000 and -0000 (yet)
        var flip = 8960 - (right(deg, 2) + mns);
        return ' ' + right('000' + flip, 4); // special case for math results 1 to 959			       
    } else {
        // handle posative declinations
        // text string +0000, +0001, ...... +8959, +9000
        return deg + mns;
    }
}

function StdDate(dt) {
    // returns a standardized date format vs I.E. or Netscape
    var Mos = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
    return Days[dt.getDay()] + ' ' + Mos[dt.getMonth()] + ' ' + IfZero(dt.getDate()) + ' ' + dt.getFullYear()
    + ' ' + IfZero(dt.getHours()) + ':' + IfZero(dt.getMinutes()) + ':' + IfZero(dt.getSeconds());
}

function isNumeric(numberstr) {
    // returns true if totally numeric
    return numberstr == numberstr.replace(/[^\d]*/gi, "");
}

function isNumericF(numberstr) {
    // returns true if totally numeric - allows a decimal point
    return numberstr == numberstr.replace(/[^\d\.]*/gi, "");
}

function Reset() {
    // the Form's default values are restored
    // includes restoring those actively set by in-line JavaScript
    // therefore we had to set all their default values as well.
}

function SetCookie(cname, value, expires, path, domain, secure) {
    // Create or update a cookie
    document.cookie = cname + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
    return document.cookie;
}

function getCookieVal(offset) {
    // Return a cookie value
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr==-1) {
        endstr = document.cookie.length
    };
    return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie(cname) {
    // Return a cookie value by "name"
    var arg = cname + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    if ((document.cookie == null) || (document.cookie.length == null)) {
        return null
    };
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return getCookieVal(j)
        };
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) 
            break;
    }
    return null;
}

function DeleteCookie(cname) {
    // Delete a Cookie
    var expdt = new Date();
    expdt.setTime (expdt.getTime() - 1);
    var cval = GetCookie(cname);
    document.cookie = cname + "=" + cval + "; expires=" + expdt.toGMTString();
}

function Killkookie() {
    // Confirm delete a Cookie
    if (GetCookie("FGMessier") == null) {
        alert("No cookie is in use.");
    } else {
        if (confirm("Do you want to delete the cookie that remembers your settings?")) {
            DeleteCookie("FGMessier");
            kookie = GetCookie("FGMessier");
        }
    }
}

function daysInFebruary (year) {
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}

function ChangeYear() {
    // The form's year was changed - update February days per month for the chosen year
    DaysPerMonth[1] = daysInFebruary((document.newCal.calendaryear.selectedIndex + 2005));
    // then force a Month update which forces a date listbox update
    ChangeMonth();
}

function ChangeMonth() {
    // The form's month was changed - update the number of days for the chosen month
    var wasselected = document.newCal.calendardate.selectedIndex;
    var dpm = DaysPerMonth[document.newCal.calendarmonth.selectedIndex + 0]; // get days that month
    document.newCal.calendardate.length = dpm - 1; // reset length of date listbox
    for (var irm = 27; irm < dpm; irm++) {
        // ensure dates options are there given new length setting
        document.newCal.calendardate.options[irm] = new Option(irm + 1);
    }
    if (wasselected > dpm - 1) {
        document.newCal.calendardate.selectedIndex = dpm - 1;
    } else {
        document.newCal.calendardate.selectedIndex = wasselected;
    }
}

function SetViewSeq() {
    document.newCal.optType[4].checked = true;
}

function DoMarathon() {
    // Checks the parameters, calculates and populates the table when Submit is clicked.
    if (gorun == false) 
        return null; // NS 4
    var dateofinterest;
    var dateofinterestD;
    var dateofinterestM;
    var dateofinterestNoon;
    var dateofinterestTZoffset;
    var dateofinterestY;
    var dayofweek;
    var Jan1;
    var Jan1TimeZoneOffsetInMinutes;
    var latitude;
    var longitude;
    var moonRSText;
    var moonRText;
    var moonSText;
    var mrs;
    var mrs0;
    var mrs1;
    var oneDay = 1000 * 60 * 60 * 24;
    var suntimes;
    var today;
    var utcHours;
    var JD;
    var lst;
    var SortOrder;

    // Check parameters from the Form
    // Year, Month, Date and Horizon limitations are listboxes - no checking needed

    // Longitude Degrees
    if ((!isNumeric(document.newCal.longdeg.value)) || (document.newCal.longdeg.value < 0) || (document.newCal.longdeg.value > 180)) {
        alert('Bad Longitude Degrees: ' + document.newCal.longdeg.value + '\nLongitude Degrees must be a number between 0 and 180.');
        return;
    }
    // Longitude Minutes 50.123
    if ((!isNumericF(document.newCal.longmin.value)) || (document.newCal.longmin.value < 0) || (document.newCal.longmin.value > 60)) {
        alert('Bad Longitude Minutes: ' + document.newCal.longmin.value + '\nLongitude Minutes must be a number between 0 and 60.');
        return;
    }
    // Time Offset Must allow fractional parts e.g. 3.5 hours
    if ((!isNumericF(document.newCal.utchrs.value)) || (document.newCal.utchrs.value < 0) || (document.newCal.utchrs.value > 13)) {
        alert('Bad UTC Offset (Hrs): ' + document.newCal.utchrs.value + '\nUTC Offset (Hrs) must be a number between 0 and 13.');
        return;
    }
    // Longitude Direction
    longitude = document.newCal.longdeg.value * 1 + document.newCal.longmin.value / 60;
    if (longitude > 180) {
        alert('Bad Longitude Degrees+Minutes: ' + longitude + '\nLongitude Degrees+Minutes must be a number between 0 and 180.');
    }
    utcHours = document.newCal.utchrs.value * 1;
    if (document.newCal.optLongitude[0].checked) {
        // West?
        longitude =- longitude;
        utcHours =- utcHours;
    }
    //if (document.newCal.dst[1].checked) { // DST?
    //	utcHours=utcHours+1;
    //}

    // Latitude Degrees
    if ((!isNumeric(document.newCal.latdeg.value)) || (document.newCal.latdeg.value < 0) || (document.newCal.latdeg.value > 90)) {
        alert('Bad Latitude Degrees: ' + document.newCal.latdeg.value + '\nLatitude Degrees must be a number between 0 and 90.');
        return;
    }
    // Latitude Minutes 50.123
    if ((!isNumericF(document.newCal.latmin.value)) || (document.newCal.latmin.value < 0) || (document.newCal.latmin.value > 60)) {
        alert('Bad Latitude Minutes: ' + document.newCal.latmin.value + '\nLatitude Minutes must be a number between 0 and 60.');
        return;
    }
    // Latitude Direction
    latitude = document.newCal.latdeg.value * 1 + document.newCal.latmin.value / 60;
    if (latitude > 90) {
        alert('Bad Latitude Degrees+Minutes: ' + latitude + '\nLatitude Degrees+Minutes must be a number between 0 and 90.');
    }
    if (document.newCal.optLatitude[1].checked) {
        // South?
        latitude =- latitude;
    }

    // Parms OK - Remember the Title, Longitude, UTCoffset, West/East, Latitude, North/South in a cookie
    // only if the user requests it.
    if (document.newCal.chkUseCookie.checked) {
        var exDate = new Date(2099, 1 - 1, 1, 0, 0, 0, 0);
        kookie = SetCookie ("FGMessier", document.newCal.caltitle.value + ';' + document.newCal.longdeg.value + ';' +
        document.newCal.longmin.value + ';' + document.newCal.utchrs.value + ';' +
        document.newCal.optLongitude[0].checked + ';' + document.newCal.latdeg.value + ';' +
        document.newCal.latmin.value + ';' + document.newCal.optLatitude[0].checked,
        exDate);
        //alert(kookie);
    }
    // The Year and Month for which the Messier Marathon Planner is calculated
    selectedYear = document.newCal.calendaryear.selectedIndex + 2005; // 0 to n -> 2005 to 2005+n
    selectedMonth = document.newCal.calendarmonth.selectedIndex; // 0 to 11
    selectedDate = document.newCal.calendardate.selectedIndex + 1; // 0 to 30 -> 1 to 31 (less for short months)

    // Convert Year, Month, and Date to a Date - the first of this month
    selected = new Date(selectedYear, selectedMonth, selectedDate, 0, 0, 0, 0);
    selectedDow = selected.getDay();

    // The title lines
    DOMGetElement("gtitleL1").innerHTML = document.newCal.caltitle.value;
    DOMGetElement("gtitleC1").innerHTML = Days[selectedDow] + '<BR>' + selectedMonthArray[selectedMonth] + ' ' + selectedDate + ', ' + selectedYear;
    today = new Date();
    DOMGetElement("gtitleR1").innerHTML = 'Created: ' + StdDate(today);

    Jan1 = new Date(selected.getFullYear(), 0, 1, 0, 0, 0, 0);
    Jan1TimeZoneOffsetInMinutes = Jan1.getTimezoneOffset();

    dateofinterest = selected; // date selected
    dateofinterestY = dateofinterest.getFullYear();
    dateofinterestM = dateofinterest.getMonth();
    dateofinterestD = dateofinterest.getDate();
    //DOMGetElement("debug").innerText=messiers.innerHTML;
    //DOMGetElement("debug").innerText=mdiv.innerHTML;

    if (document.newCal.optType[0].checked) {
        SortOrder = 0
    }
    if (document.newCal.optType[1].checked) {
        SortOrder = 1
    }
    if (document.newCal.optType[2].checked) {
        SortOrder = 2
    }
    if (document.newCal.optType[3].checked) {
        SortOrder = 3
    }
    if (document.newCal.optType[4].checked) {
        SortOrder = 4
    }

    DOMGetElement("mdiv").innerHTML = GenerateTable(dateofinterestY, dateofinterestM, dateofinterestD,
    longitude, latitude, utcHours, SortOrder, document.newCal.horizon.selectedIndex, (document.newCal.twilight.selectedIndex) * 6,
    document.newCal.chkShowAltAz.checked, document.newCal.chkImages.checked, document.newCal.chkRemarks.checked,
    document.newCal.sequence.selectedIndex, document.newCal.chkTransits.checked);
}

function Bsort(arr, isort) {
    // bubble sort using values in first array. result indices in isort
    var swap = true;
    var itemp;
    var istop = 110 - 1;
    do {
        swap = false;
        for (var i = 1 - 1; i <= istop - 1; i++) {
            if (arr[isort[i]] > arr[isort[i + 1]]) {
                itemp = isort[i];
                isort[i] = isort[i + 1];
                isort[i + 1] = itemp;
                swap = true;
            }
        }
        istop -= 1;
    }
    while (swap == true);
}

function radtoaa2(ra, dec, lat, lst) {
    // was radtoaa(ra,dec,year,month,day,hours,lat,lon)
    // convert ra and dec to altitude and azimuth
    // year, month, day and hours are the Greenwich date and time
    // lat and lon are the observers latitude and longitude

    //var lst=local_sidereal(year,month,day,hours,lon); now a parm to speed things up
    // Computing rise/set times for other celestial bodies.
    // This is done the same way as for the Sun, with some differences:
    //a) Compute the RA and Decl for that body instead of for the Sun.
    //   If the body is a star, get its RA and Decl from a suitable star catalog.
    //b) GMST0 is still needed, so you should compute the Sun's mean longitude.
    //c) Always use 15.04107 instead of 15.0 when converting LHA from degrees to hours.
    // does not take into effect -0.583 degrees: Center of object touches the horizon; atmospheric refraction accounted for
    //  var x=cosd(15.0*(lst-ra))*cosd(dec);
    //  var y=sind(15.0*(lst-ra))*cosd(dec);
    //  var z=sind(dec);
    //  // rotate so z is the local zenith
    //  var xhor=x*sind(lat)-z*cosd(lat);
    //  var yhor=y;
    //  var zhor=x*cosd(lat)+z*sind(lat);
    //  var azimuth=rev(atan2d(yhor,xhor)+180.0); // so 0 degrees is north
    //  var altitude=atan2d(zhor,Math.sqrt(xhor*xhor+yhor*yhor));
    //  return new Array(altitude,azimuth);
    // global var optimization for radtoaa2 - globals took longer!

    //harad=(lst-ra)*15.0*RadPerDeg;     // * 15.0*RadPerDeg
    var harad = (lst - ra) * 0.261799387799149; // * 15.0*RadPerDeg
    //harad=(lst-ra)*0.262516194522944;  // * 15.04107*RadPerDeg  
    var decrad = dec * RadPerDeg;
    //var sdecrad=Math.sin(decrad);
    var cdecrad = Math.cos(decrad);
    var latrad = lat * RadPerDeg;
    var slatrad = Math.sin(latrad);
    var clatrad = Math.cos(latrad);

    var x = Math.cos(harad) * cdecrad;
    var yhor = Math.sin(harad) * cdecrad;
    var z = Math.sin(decrad);
    // rotate so z is the local zenith
    var xhor = x * slatrad - z * clatrad;
    //var yhor=y;
    var zhor = x * clatrad + z * slatrad;
    //var azimuth=; // so 0 degrees is north
    //var altitude=;
    return new Array(atan2d(zhor, Math.sqrt(xhor * xhor + yhor * yhor)), rev(atan2d(yhor, xhor) + 180.0));
}

function GenerateTable(dateofinterestY, dateofinterestM, dateofinterestD, longitude, latitude, utcHours,
SortOrder, HorizonLimit, TwilightDeg, ShowAltAz, ShowImages, ShowRemarks, Sequence, DoTransits) {
    var dtext = '';
    var newtable = '';
    var Obs;
    var suntimes;
    var mrs;
    var moonRText;
    var moonSText;
    var moonRSText;
    var i;

    var utcyear = selected.getUTCFullYear();
    var utcmonth = selected.getUTCMonth();
    var utcdate = selected.getUTCDate();
    var Choice;
    var sunset;
    var RA1;
    var locst1;
    var sunrise;
    var RA2;
    var locst2;
    var PicIndex = new Array(110);
    var mp;
    var mPhase;
    var obs = new Array(110);
    var polar = new Array(110);
    var Optseq = new Array(110);
    var Altitudes = new Array(110);
    var Azimuths = new Array(110);
    var AltAz = new Array(110);
    var AltTimes = new Array(110);
    var isort = new Array(110);
    var countbad = 0;
    var RiseTimes = new Array(110);
    var TransitTimes = new Array(110);
    var TransitsPrevAzm = new Array(110);
    var SetTimes = new Array(110);
    var irow;
    var delta;
    var lst;
    var tcalc;
    var is;
    var newrow;

    dtext += '<TABLE border="1" class="btextss" id="parameters" name="parameters" summary="">';
    dtext += '<TBODY>';
    /*
    	dtext+='<TR>';
    		dtext+='<TD>Date:<\/TD><TD colspan=5 align="center">'+Days[selected.getDay()]+' '+selectedMonthArray[selected.getMonth()]+' '+IfZero(selected.getDate())+' '+selected.getFullYear()+'<\/TD>';
    	dtext+='<\/TR>';
    	*/
    dtext += '<TR>';
    dtext += '<TD>Longitude:<\/TD><TD>' + longitude + '<TD>Latitude:<\/TD><TD>' + latitude + '<TD>UTCoffset:<\/TD><TD>' + utcHours + '<\/TD>';
    dtext += '<\/TR>';
    dtext += '<TR>';
    dtext += '<TD>Horizon limit:<\/TD><TD>' + HorizonLimit + '&deg; of Dec' + '<\/TD>';
    dtext += '<TD>Twilight limit:<\/TD><TD>' + TwilightDeg + '&deg;<\/TD><TD colspan=2>&nbsp;= ' + hmstring(TwilightDeg / 15) + ' of RA' + '<\/TD>';;
    dtext += '<\/TR>';
    dtext += '<TR>';
    suntimes = SunRiseSet(dateofinterestY, dateofinterestM + 1, dateofinterestD, latitude, longitude);
    sunset = suntimes[1] + utcHours;
    dtext += '<TD>Sunset:<br>(this day)<\/TD><TD>' + hmstring(sunset) + '<\/TD>';
    RA1 = SunRa(dateofinterestY, dateofinterestM + 1, dateofinterestD, sunset, latitude, longitude)
    dtext += '<TD>at RA:<\/TD><TD>' + hmstring(RA1) + '<\/TD>';
    locst1 = hmstring(local_sidereal(utcyear, utcmonth + 1, utcdate, sunset - utcHours, longitude));
    dtext += '<TD>&nbsp;at LMST:<\/TD><TD>' + locst1 + '<\/TD>';
    dtext += '<\/TR>';
    dtext += '<TR>';
    suntimes = SunRiseSet(dateofinterestY, dateofinterestM + 1, dateofinterestD + 1, latitude, longitude);
    sunrise = suntimes[0] + utcHours;
    dtext += '<TD>Sunrise:<br>(next day)<\/TD><TD>' + hmstring(sunrise) + '<\/TD>';
    RA2 = SunRa(dateofinterestY, dateofinterestM + 1, dateofinterestD + 1, sunrise, latitude, longitude)
    dtext += '<TD>at RA:<\/TD><TD>' + hmstring(RA2) + '<\/TD>';
    locst2 = hmstring(local_sidereal(utcyear, utcmonth + 1, utcdate + 1, sunrise - utcHours, longitude));
    dtext += '<TD>&nbsp;at LMST:<\/TD><TD>' + locst2 + '<\/TD>';
    dtext += '<\/TR>';
    dtext += '<TR>';
    dtext += '<TD>&nbsp;<\/TD><TD colspan=2>Hours of darkness:<\/TD><TD>' + hmstring(sunrise + 24 - sunset) + '<\/TD><TD colspan=2>&nbsp;<\/TD>';
    dtext += '<\/TR>';

    for (i = 0; i <= 1; i++) {
        dtext += '<TR>';
        // Moon rise and set - from Peter Hayes' website
        // new version will return an array containing rise and set times or one of the following codes.
        // -1 rise or set event not found and moon was down at 00:00
        // -2 rise or set event not found and moon was up at 00:00
        // So you need both -1 or both -2 for always down or always up.
        mrs = MoonRise(dateofinterestY, dateofinterestM + 1, dateofinterestD + i, utcHours, latitude, longitude);
        if (mrs[0] >= 0) {
            moonRText = '<TD>Moonrise:<\/TD><TD>' + hmstring(mrs[0]) + '<\/TD>'; // was +utcHours
        } else {
            moonRText = '<TD>Moonrise:<\/TD><TD>xx:xx<\/TD>';
        }
        if (mrs[1] >= 0) {
            moonSText = '<TD>Moonset:<\/TD><TD>' + hmstring(mrs[1]) + '<\/TD>'; // was +utcHours
        } else {
            moonSText = '<TD>Moonset:<\/TD><TD>xx:xx<\/TD>';
        }
        // order the Moon Rise / Set messages
        if ((mrs[0] >= 0) && (mrs[1] >= 0)) {
            mrs0 = mrs[0]; // was +utcHours
            mrs1 = mrs[1]; // was +utcHours 
            while (mrs0 >= 24) {
                mrs0 -= 24;
            }
            while (mrs0 < 0) {
                mrs0 += 24;
            }
            while (mrs1 >= 24) {
                mrs1 -= 24;
            }
            while (mrs1 < 0) {
                mrs1 += 24;
            }
            if (mrs0 < mrs1) {
                moonRSText = moonRText + moonSText;
            } else {
                moonRSText = moonSText + moonRText;
            }
        } else {
            if (mrs[1] >= 0) {
                moonRSText = moonSText + moonRText;
            } else {
                moonRSText = moonRText + moonSText;
            }
        }


        // Moon Phase - from Peter Hayes' website
        mp = MoonPhase(dateofinterestY, dateofinterestM + 1, dateofinterestD + i);
        mPhase = Math.round(mp);
        //var mPhaseD=Math.round(100.0*(1.0+cosd(mp))/2.0);
        //var moonPhText='M12hUTC='+mPhase+'° ='+mPhaseD+'%';

        // Moon phase graphics (this day (0) and next day (1))
        PicIndex[i] = 15 - Math.round(mPhase / (90 / 7));
        if (PicIndex[i] < 1) {
            PicIndex[i] += 29
        }
        if (i == 0) {
            dtext += moonRSText + '<TD align="center"><IMG alt="" height="32" width="32" src="moonphases/' + ((latitude >= 0) ? ('N') : 'S') + 'S_moon' + IfZero(PicIndex[0]) + '.gif">' + '</TD><TD>this<BR>day<\/TD>'
        } else {
            dtext += moonRSText + '<TD align="center"><IMG alt="" height="32" width="32" src="moonphases/' + ((latitude >= 0) ? ('N') : 'S') + 'S_moon' + IfZero(PicIndex[1]) + '.gif">' + '</TD><TD>next<BR>day<\/TD>'
        }
        dtext += '<\/TR>';
    }


    // perform action

    for (irow = 1 - 1; irow <= 110 - 1; irow++) {
        // initialize some arrays (once per call)
        obs[irow] = '&nbsp;';
        polar[irow] = 0; // assume non-circumpolar i.e. transits
        isort[irow] = irow; // initialize sorting array - start off with list in Messier # order (SortOrder==0)

        // set up a canned sequence
        switch (Sequence) {
        case 0:
            Optseq[PHo[irow] - 1] = irow + 1; // March 2002 Astronomy Phil Harrington
            break;
        case 1:
            Optseq[DMo[irow] - 1] = irow + 1; // Don Machholz - Messier Marathon Observer's Guide
            break;
        case 2:
            Optseq[ETo[irow] - 1] = irow + 1; // March 2000 Sky and Telescope Ed Ting
            break;
        case 3:
            Optseq[TLo[irow] - 1] = irow + 1; // 1997 by Tomm Lorenzin
            break;
        case 4:
            Optseq[n06[irow] - 1] = irow + 1; // March 2006 Astronomy
            break;
        case 5:
            Optseq[RLM[irow] - 1] = irow + 1; // Larry McNish for 51&deg;N, 2006
            break;
        case 6:
            Optseq[TC[irow] - 1] = irow + 1; // Tom Cameron for Calgary RASC WCO
            break;
        }

        // for given latitude - determine if below southern/northern horizon or always circumpolar
        if (latitude >= 0) {
            // observer at pos latitude
            if (DeclNumeric[irow] < (latitude - 90 + HorizonLimit)) {
                obs[irow] = 'not poss D';
                countbad += 1;
            }
            if (DeclNumeric[irow] > (90 - latitude)) {
                // northern item is circumpolar - but does it also transit South of the Zenith?
                if (DeclNumeric[irow] > latitude) {
                    // decl > 90-lat but also < lat
                    polar[irow] =- 1; //  = 'Yes' // circumpolar object, no transit
                } else {
                    polar[irow] = 1; //  = 'YesT' // circumpolar object with transit
                }
            }
        } else {
            // observer at neg latitude
            if (DeclNumeric[irow] > (latitude + 90 - HorizonLimit)) {
                obs[irow] = 'not poss D';
                countbad += 1;
            }
            if (DeclNumeric[irow] < ( - 90 - latitude)) {
                // southern item is circumpolar - but does it also transit North of the Zenith?
                if (DeclNumeric[irow] < latitude) {
                    // decl < -90-lat but also < lat
                    polar[irow] =- 1; //  = 'Yes' // circumpolar object, no transit
                } else {
                    polar[irow] = 1; //  = 'YesT' // circumpolar object with transit
                }
            }
        }

        // if it's RA is too near the sun's RA - show that
        delta = Math.abs(RA1 - RAhmNumeric[irow]); // RA of Sun - Ra of Obj in hours

        if ( (delta < TwilightDeg / 15) || (delta > 24 - TwilightDeg / 15) ) {
            // within 'twilight' on either side of the Sun
            if (polar[irow] == 0) {
                if (obs[irow] == '&nbsp;') {
                    obs[irow] = 'not poss S';
                    countbad += 1;
                }
                // not circumpolar, but too near Sun
                else {
                    obs[irow] += '<BR>+not pos S'
                }
            } else {
                polar[irow] = polar[irow] * 2; // -1,1 -> -2,2 = 'Yes**' 'YesT**' is circumpolar, but near Sun's RA 
            }
        }
    }
    //determine Optimized sequence viewing order



    // For every object compute its Max Altitude at any time this night and into tomorrow morning.
    // This has to work for Northern and Southern hemisphere marathoners
    // (max altitude was set to lower than low to start (-100))
    // Whenever a max Altitude is found, also save the local time and Azimuth when it occurred.
    // This does a lot of calculations - every xx minutes from sunset to sunrise, it recalculates
    // all 110 objects to see if the Altitude is higher.
    // sample altitudes from sunset to sunrise every 5 mins (0.0833333 hr)
    // for a 12+ hour marathon this is 12h = 720 min/5 min = 144 loops at 110 objects each = 15,840 calculations
    // e.g. Mar 12, 2005 = 12:19 of LMST,  12:17 of darkness
    // Future Optimizations:
    // 1. any object whose RA is <= LMST (West of meridian) AT SUNSET LMST is highest right then - at sunset UNLESS IT IS CIRCUMPOLAR AT THIS +/-LATITUDE
    // 2. any object whose RA is > LMST (East of meridian) AT SUNRISE LMST is highest right then - at sunrise UNLESS IT IS CIRCUMPOLAR AT THIS +/-LATITUDE
    // 3. any object that crosses the meridian sometime during the night is highest then. LOWER CULMINATION AND UPPER CULMINATION (Max Alt)
    // NOTE - user may select a year/month/date where messier objects do not rise or set!
    // to avoid problems this algorithm currently samples every object every 5 mins
    // to sample every 1 minute would be 720 * 110 = 79,200 calculations (5 times longer) 

    // it was found that to catch objects transiting near the zenith close to azm=180, a sampling inteval of 1/3 minute was needed.
    if (DoTransits) {
        delta = 1.0 / 3.0 / 60.0; // sampling interval as part of an hour
        //delta=1.0/60.0; // sampling interval as part of an hour
    } else {
        delta = 5 / 60; // sampling interval as part of an hour
    }

    // at this point, polar[i] can be:
    //		0   '&nbsp;' item is not circumpolar - it rises,transits,sets
    //		-1  'Yes'    item is circumpolar - no transit
    //		+1  'YesT'   item is circumpolar also transits south of the Zenith
    //		-2  'Yes**'		item is circumpolar - no transit and near the suns ra
    //		+2  'YesT**'	item is circumpolar also transits south of the Zenith and near the suns ra

    // Altitude at lst of sunset the first day
    lst = local_sidereal(dateofinterestY, dateofinterestM + 1, dateofinterestD, sunset - utcHours , longitude); // LMST at sunset
    for (i = 1 - 1; i <= 110 - 1; i++) {
        AltAz = radtoaa2(RAhmNumeric[i], DeclNumeric[i], latitude, lst);
        Altitudes[i] = AltAz[0]; // initial values - look for better ones later
        Azimuths[i] = AltAz[1];
        AltTimes[i] = sunset;
        if (DoTransits) {
            RiseTimes[i] =- 1.0;
            SetTimes[i] =- 1.0;
            TransitTimes[i] =- 1.0;
        }
    }
    //var debugtext='';
    // altitudes throughout the night and the morning of the next day - this section could be optimized
    for (tcalc = sunset + delta; tcalc < sunrise + 24; tcalc += delta) {
        // get lst at this time for AltAz calculation
        lst = local_sidereal(dateofinterestY, dateofinterestM + 1, dateofinterestD, tcalc - utcHours , longitude); // LMST at time "tcalc"t
        // check altitude of all objects at this time
        for (i = 1 - 1; i <= 110 - 1; i++) {
            AltAz = radtoaa2(RAhmNumeric[i], DeclNumeric[i], latitude, lst);
            if (AltAz[0] > Altitudes[i]) {
                Altitudes[i] = AltAz[0];
                Azimuths[i] = AltAz[1];
                AltTimes[i] = tcalc;
            }
            // one minute of clock time can result in approx 2.8 degrees of Azimuth change for M106 near the Zenith
            // only M106 changed when the delta was set to 1/3 minute instead of 1 minute since it was able to
            // see M106 hit Azm 180 - with 1 minute of clock time M106 jumped over 180 Azm.
            // time 24.74129296084131	Azm 179.7254024525828
            //      24.757959627507976	   182.5326967578922

            //if (i==(106-1)) {debugtext+=tcalc+','+AltAz[1]+'<BR>';}
            /* if (   (TransitTimes[i]=='') && (Math.abs(AltAz[1]-180.0)<5.0)  ) {
                           	TransitTimes[i]=tcalc;	// first approximation when approaching 
                               TransitsPrevAzm[i]=AltAz[1];
                           }  */
            if (DoTransits) {
                if (polar[i] == 0) {
                    // compute rise,set for non-circumpolar objects
                    if ( (RiseTimes[i]==-1.0) && (Math.floor(AltAz[0]) == 0) && (AltAz[1] < 180) ) {
                        RiseTimes[i] = tcalc;
                    }
                    // first time it's >= 0 and rising (left of meridian)
                    if ( (SetTimes[i]==-1.0) && (Math.floor(AltAz[0]) == 0) && (AltAz[1] > 180) ) {
                        SetTimes[i] = tcalc;
                    }
                    // first time it's >= 0 and rising (left of meridian)
                }
                if (polar[i] >= 0) {
                    // some circumpolar items CAN transit - they reach south of the zenith
                    if ( (TransitTimes[i]==-1.0) && (Math.floor(AltAz[1]) == 180) ) {
                        TransitTimes[i] = tcalc;
                    }
                    // first time it's >= 180.000000
                }
            }
        }

    }
    //DOMGetElement("debug").innerText=debugtext;
    // ensure we do Altitude at lst of sunrise on the next day exactly
    lst = local_sidereal(dateofinterestY, dateofinterestM + 1, dateofinterestD + 1, sunrise - utcHours , longitude); // LMST at sunrise
    for (i = 1 - 1; i <= 110 - 1; i++) {
        AltAz = radtoaa2(RAhmNumeric[i], DeclNumeric[i], latitude, lst);
        if (AltAz[0] > Altitudes[i]) {
            Altitudes[i] = AltAz[0];
            Azimuths[i] = AltAz[1];
            AltTimes[i] = sunrise;
        }
        if (DoTransits) {
            if ( (RiseTimes[i]==-1.0) && (Math.floor(AltAz[0]) == 0) && (AltAz[1] < 180) ) {
                RiseTimes[i] = sunrise;
            }
            // first time it's >= 0 and rising (left of meridian)
            if ( (SetTimes[i]==-1.0) && (Math.floor(AltAz[0]) == 0) && (AltAz[1] > 180) ) {
                SetTimes[i] = sunrise;
            }
            // first time it's >= 0 and rising (left of meridian)
            if ( (TransitTimes[i]==-1.0) && (Math.floor(AltAz[1]) == 180) ) {
                TransitTimes[i] = sunrise;
            }
            // first time it's >= 180.000000
        }

        // Finally, if Max Altitude is too low - show it
        if (Altitudes[i] < HorizonLimit) {
            if (obs[i] == '&nbsp;') {
                obs[i] = 'not poss A';
                countbad += 1;
            }
            // never gets high enough to observe
            else {
                if (obs[i] == 'not poss S') {
                    obs[i] += '<BR>+not pos A'
                }
                // A only if NOT D
            }
        }
    }


    // sort the results based on sort choice
    switch (SortOrder) {
    case 0:
        Choice = 'Messier # order';
        break;
    case 1:
        Bsort(RAhm, isort);
        Choice = 'Right Ascension order';
        break;
    case 2:
        Bsort(Decl, isort);
        Choice = 'Declination order';
        break;
    case 3:
        Bsort(Mv, isort);
        Choice = 'Visual Magnitude order';
        break;
    case 4:
        Bsort(Optseq, isort);
        switch (Sequence) {
        case 0:
            Choice = 'Phil Harrington - Astronomy, March 2002';
            break;
        case 1:
            Choice = "Don Machholz - Messier Marathon Observer's Guide";
            break;
        case 2:
            Choice = 'Ed Ting - Sky & Telescope, March 2000';
            break;
        case 3:
            Choice = 'Tomm Lorenzin, 1997';
            break;
        case 4:
            Choice = 'Astronomy Magazine, March 2006';
            break;
        case 5:
            Choice = 'Larry McNish for 51&deg;N, 2006';
            break;
        case 6:
            Choice = 'Tom Cameron for Calgary RASC WCO';
            break;
        }
        break;
    }


    // output the intro table
    dtext += '<TR><TD colspan="6" align="center">Sequence: ' + Choice + '<\/TD><\/TR>';
    dtext += '<TR><TD colspan="6" align="center"><span class="copage">With these parameters, the "not possible" count = ' + countbad + '</span><\/TD><\/TR>';
    dtext += '<\/TBODY><\/TABLE><BR>';
    newtable += dtext;

    // width=699
    // output the heading row
    newtable += '<TABLE border="1" class="btextss" id=messiers name="messiers" summary="">';
    newtable += '<TBODY>';
    newtable += '<TR>';
    if (ShowImages) {
        newtable += '<TH><SPAN class=dowblk>Image<\/SPAN><\/TH>';
    }
    newtable += '<TH><SPAN class=dowblk>Observed<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>Veri-<br>fied<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>M#<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>NGC#<\/SPAN><\/TH>';

    newtable += '<TH><SPAN class=dowblk>Polar<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>Seq<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>Type<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>Cons<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>RA<br>hr<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>RA<br>min<\/SPAN><\/TH>';
    //newtable+='<TH><SPAN class=dowblk>RA debug<\/SPAN><\/TH>'; // debug
    newtable += '<TH><SPAN class=dowblk>Dec<br>&deg;<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>Dec<br>min<\/SPAN><\/TH>';
    if (ShowAltAz) {
        newtable += '<TH><SPAN class=dowblk>Max<br>Alt&deg;<\/SPAN><\/TH>';
        newtable += '<TH><SPAN class=dowblk>@<br>time<\/SPAN><\/TH>';
        newtable += '<TH><SPAN class=dowblk>@<br>Azm&deg;<\/SPAN><\/TH>';
    }
    if (DoTransits) {
        newtable += '<TH><SPAN class=dowblk>Rise<br>@<\/SPAN><\/TH>';
        newtable += '<TH><SPAN class=dowblk>Tran<br>@<\/SPAN><\/TH>';
        newtable += '<TH><SPAN class=dowblk>Sets<br>@<\/SPAN><\/TH>';
    }
    //newtable+='<TH><SPAN class=dowblk>Dec debug<\/SPAN><\/TH>'; // debug
    newtable += '<TH><SPAN class=dowblk>mv<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>Size<\/SPAN><\/TH>';
    newtable += '<TH><SPAN class=dowblk>Dist Kly<\/SPAN><\/TH>';
    if (ShowRemarks) {
        newtable += '<TH><SPAN class=dowblk>Remarks<\/SPAN><\/TH>';
    }
    newtable += '<\/TR>';
    // output the main table (sorted by sequence in isort[]
    for (irow = 1 - 1; irow <= 110 - 1; irow++) {
        is = isort[irow]; // list them in predetermined sorting order
        newrow = '<TR>';
        if (ShowImages) {
            newrow += '<TD><IMG SRC="thumbnails/m' + Mno[is] + '-t.jpg" border="0" width="100" height="76"><\/TD>';
        }
        newrow += '<TD align="center">' + obs[is] + '<\/TD>';
        if (obs[is] == '&nbsp;') {
            newrow += '<TD>&nbsp;<\/TD>'
        } else {
            newrow += '<TD align="center">-----<\/TD>'
        }
        newrow += '<TD>M' + Mno[is] + '<\/TD>';
        newrow += '<TD>' + NGC[is] + '<\/TD>';
        //newrow+='<TD align="center">'+polar[is]+'<\/TD>';
        switch (polar[is]) {
            //		0   '&nbsp;' item is not circumpolar - it transits
            //		-1  'Yes'    item is circumpolar - no transit
            //		+1  'YesT'   item is circumpolar also transits south of the Zenith
            //		-2  'Yes**'		item is circumpolar - no transit and near the suns ra
            //		+2  'YesT**'	item is circumpolar also transits south of the Zenith and near the suns ra
        case - 2:
            newrow += '<TD align="center">Yes**<\/TD>';
            break;
        case - 1:
            newrow += '<TD align="center">Yes<\/TD>';
            break;
        case 0:
            newrow += '<TD align="center">&nbsp;<\/TD>';
            break;
        case 1:
            newrow += '<TD align="center">YesT<\/TD>';
            break;
        case 2:
            newrow += '<TD align="center">YesT**<\/TD>';
            break;
        }
        /* if (obs[is]=='&nbsp;') {newrow+='<TD>'+Optseq[is]+'<\/TD>'}
        			else {newrow+='<TD align="center">-----<\/TD>'} */
        newrow += '<TD align="center">' + Optseq[is] + '<\/TD>';
        newrow += '<TD>' + Mtyp[is] + '<\/TD>';
        newrow += '<TD>' + Cons[is] + '<\/TD>';
        newrow += '<TD>' + RAhrs[is] + '<\/TD>';
        newrow += '<TD>' + RAmns[is] + '<\/TD>';
        //newrow+='<TD>'+RAhm[is]+'<\/TD>'; // debug 
        newrow += '<TD>' + DECdeg[is] + '<\/TD>';
        newrow += '<TD>' + DECmns[is] + '<\/TD>';
        if (ShowAltAz) {
            newrow += '<TD>' + dround(Altitudes[is], 2) + '<\/TD>';
            newrow += '<TD>' + hmstring(AltTimes[is]) + '<\/TD>';
            newrow += '<TD>' + dround(Azimuths[is], 2) + '<\/TD>';
        }

        if (DoTransits) {
            newrow += '<TD>' + ((RiseTimes[is]==-1.0) ? 'xx:xx' : hmstring(RiseTimes[is])) + '<\/TD>';
            newrow += '<TD>' + ((TransitTimes[is]==-1.0) ? 'xx:xx' : hmstring(TransitTimes[is])) + '<\/TD>';
            newrow += '<TD>' + ((SetTimes[is]==-1.0) ? 'xx:xx' : hmstring(SetTimes[is])) + '<\/TD>';
        }
        //newrow+='<TD>'+Decl[is]+'<\/TD>'; // debug
        newrow += '<TD>' + Mv[is] + '<\/TD>';
        newrow += '<TD>' + Size[is] + '<\/TD>';
        newrow += '<TD>' + Dist[is] + '<\/TD>';
        if (ShowRemarks) {
            newrow += '<TD>' + Rems[is] + '<\/TD>';
        }
        newrow += '<\/TR>';
        newtable += newrow;
    }
    newtable += '<\/TBODY><\/TABLE>';
    //DOMGetElement("debug").innerText=newtable; // debug
    return newtable;
}


