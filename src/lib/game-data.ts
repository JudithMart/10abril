export interface LevelData {
  level: number
  riddle: string
  answer: string
  message: string
 
}

// Romantic riddles and messages for each level
export const LEVELS: LevelData[] = 
[
{
  level: 1,
  riddle: "t_ | _m_ | t_n | p_q__t_ | c_m_ | l_  | q__ | g_n_r_ | _n | át_m_  | d_ | pl_t_n__|  _l | s_p_r_rs_",
  answer: "te amo tan poquito como lo que genera un átomo de plutonio al separarse",
  message: "Bieen te faltan 19"
},
{  
  level: 2,
  riddle: "t_ | _m_ | t_n | p_q__t_ | c_m_ | l_  |r_d__c__n | d_l | _s_t_p_ | d_ | p_l_n__-210",
  answer: "te amo tan poquito como la radiación del isotopo de polonio-210",
  message: "Excelente, ya casi llegas"
},
{
  level: 3,
  riddle: "t_ | _m_ | t_nt_ | c_m_ | l_s |  p_s_b_l_d_d_s | q__ | _n  | p_q__ñ_ | pl_t_  |d_ | s_l_c__ | ll_n_|  d_ | tr_ns_st_r_s | l_ | d_|  _l | m_nd_",
  answer: "te amo tanto como las posibilidades que un pequeño plato de silicio lleno de transistores le da al mundo",
  message: "Wow, eres un genio, sabes qué son los microtransistores?"
},
{
  level: 4,
  riddle: "t_ | _m_ | t_nt_ | c_m_ | _l  | núm_r_ | d_ | m_cr_tr_ns_st_r_s | g_n_r_d_s | _n__lm_nt_",
  answer: "te amo tanto como el número de microtransistores generados anualmente",
  message: "Increíble, sabes que aman los procesadores? tic tac tic tac"
},
{
  level: 5,
  riddle: "t_ | _m_ | c_m_ | _n  | pr_c_s_d_r  | _m_ | l_s | c_cl_s | d_ | r_l_j",
  answer: "te amo como un procesador ama los ciclos de reloj",
  message: "¡Muy bien! "
},
{
  level: 6,
  riddle: "t_ | _m_ | c_m_ | _n  | m_t_r | t_rb_ | _m_ | _l  | _r_ | c_mpr_m_d_",
  answer: "te amo como un motor turbo ama el aire comprimido",
  message: "¡Excelente! que hace la gravedad? "
},
{
  level: 7,
  riddle: "t_ | _m_ | c_n  | l_ | f__rz_  | c_n  | l_  | q__  | l_  | gr_v_d_d  | m_nt__n_  | _n_d_s  | l_s  | g_l_x__s",
  answer: "te amo con la fuerza con la que la gravedad mantiene unidas las galaxias",
  message: "¡Wow! "
},
{
  level: 8,
  riddle: "t_ | _m_ | t_nt_ | c_m_ | _l  | _n_v_rs_  | _m_  | cr__r  | c_mpl_j_d_d  | d_sd_  | _l  | c__s",
  answer: "te amo tanto como el universo ama crear complejidad a partir del caos",
  message: "¡Increíble! si el tiempo fuera una ecuación.. jmm extraño las ecuaciones :("
},
{
  level: 9,
  riddle: "s_ | _l  | t__mp_  | f__r_  | _n_  | _c__c__n | _l_g_r__  | r_p_t_r  | c_d_  | _nst_nt_  | c_nt_g_",
  answer: "si el tiempo fuera una ecuación elegiría repetir cada instante contigo infinitas veces",
  message: "Qué rayos es una supernova? "
},
{
  level: 10,
  riddle: "m_ | _m_r | p_r | t_ |t__n_ | m_s  |_n_rg__ | q__|  _n_|  s_p_rn_v_ | y  m_s | _st_b_l_d_d | q__  |_n_  |órb_t_ | p_rf_ct_",
  answer: "mi amor por ti tiene más energía que una supernova y más estabilidad que una órbita perfecta",
  message: "¡Excelente! "
},
{
  level: 11,
  riddle: "s_ | f__r_s|  _n | pl_n_t_|  y_ | s_r__ | t_  | órb_t_ |  _n_v_t_bl_m_nt_ | _tr_íd_| h_c__| t_",
  answer: "si fueras un planeta yo sería tu órbita inevitablemente atraído hacia ti",
  message: "¡Wow! "
},
{
  level: 12,
  riddle: "t_ | _m_ | c_s_ | t_nt_ | c_m_ | l_  | p_t_nc__ | q__ | g_n_r_ | _n | h_ll_ph_nt",
  answer: "te amo casi tanto como la potencia que genera un hellephant",
  message: "¡Increíble! escuchasss? ese sonido del motor... "
},
{
  level: 13,
  riddle: "t_ | _m_ | c_s_ | t_nt_ | c_m_ | _l  | s_n_d_ | d_l | m_t_r | r_t_t_v_ | d_l | 787b",
  answer: "te amo casi tanto como el sonido del motor rotativo del 787b",
  message: "Que rayos es un 2jz y porque ama escuchar el spool?? "
},
{
  level: 14,
  riddle: "t_ | _m_ | c_m_ | _l  | t_rb_ | d_ | _n  | 2jz  | _m_ | _sc_ch_r  | _l  | sp__l | _nt_s | d_ | l_b_r_r | t_d_ | l_ | f_erz_",
  answer: "te amo como el turbo de un 2jz ama escuchar el spool antes de liberar toda la fuerza",
  message: "Vtec a altas??? Qué es eso?? "
},
{
  level: 15,
  riddle: "m_ | c_r_zón | c_nt_g_ | h_c_ | l_ | m_sm_ | q__ | _l  | vt_c  | a  | _lt_s  | rpm",
  answer: "mi corazón contigo hace lo mismo que el vtec a altas rpm",
  message: "Si sabes o naaah? "
},
{
  level: 16,
  riddle: "j__n|  _sc_t__ | n_  |m_r__ | _nv__lt_ | _n | _n_  |b_nd_r_",
  answer: "juan escutia no murió envuelto en una bandera",
  message: "Ya casi?"
},
{
  level: 17,
  riddle: "t_ | _m_ | t_nt_ | c_m_ | m__rt_s | p_r | c_m_r_s | d_ | g_s | _n | l_ | s_g_nd_ | g__rr_",
  answer: "te amo tanto como muertes por cámaras de gas en la segunda guerra",
  message: "Uyyy escuchas?? esa canción muuy buena la verdad"
},
{
  level: 18,
  riddle: "Wh_n | I | m_t | y__ ,| I | f__nd | y__| s_f_ | _nd| w_rm",
  answer: "When I met you, I found you safe and warm", 
  message: "¡Último nivel! Esa ni yo se jaja "
},
{
  level: 19,
  riddle: "m_ | _m_r | g_r_ | c_m_ | _l | m_t_r | r_t_t_v_",
  answer: "mi amor gira como el motor rotativo ",
  message: "Yaaaa?"
},
{
  level: 20,
  riddle: "I |l_v_ | th_| n_mb_r |_f |st_rs |_n |th_| sky",
  answer: "I love the number of stars in the sky",
  message: "¡Felicidades! has completado el juego, espero que hayas disfrutado cada nivel tanto como yo disfruté creándolo para ti <3 Y ahoraaa?, osea no ganaste nada jaja"
}
]

export function getLevelData(level: number): LevelData | undefined {
  return LEVELS.find(l => l.level === level)
}
