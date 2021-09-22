import React from 'react';
import moxios from 'moxios';
import Page from '.';

// run instance of moxios
moxios.install();

// Mock response when show results
moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=testament&limit=80',{
  status: 200,
  response: ["testament",["Testament","Testament (band)","Testaments of the Twelve Patriarchs","Testament of Youth (film)","Testament of Solomon","Testament discography","Testament (album)","Testament of Youth","Testament of Abraham","Testament (1983 film)","Testament (comics)","Testamentary capacity","Testamentary trust","Testament (song)","Testament m\u00f3j","Testamentum Domini","Testament of Job","Testament of Qahat","Testament of Boles\u0142aw III Wrymouth","Testament (video game)","Testament: The Bible in Animation","Testament of Man","Testament of Ieyasu","Testament of Orpheus","Testament of Ba","Testament of Adam","Testament, New","Testament Records (United States)","Testament of Pope Pius XII","Testamentary disposition","Testament of Youth (TV series)","Testament (Guilty Gear)","Testament of Isaac","Testament and Death of Moses","Testamentum Dasumii","Testament, Old","Testamentum Flavianum","Testament of Jacob","Testament and will","Testament (Xenosaga)","Testament of Charlemagne","Testament Records (UK)","Testament Tour","Testament of Pope John Paul II","Testament of Pope Paul VI","Testament des Dr. Mabuse, Das","Testament of Hezekiah","Testament Of Sherlock Holmes","Testamentary adoption","Testament to Youth in Verse","Testament of Moses","Testament of Cresseid","Testament de M. Fortun\u00e9 Ricard","Testament (poem)","Testament of Rabbi Israel Baal Shem","Testaments of the Three Patriarchs","Testament (2004 film)","Testament Newydd ein Arglwydd Iesu Christ","Testamentary","Testament of Peter the Great","Testament Records","Testament of Erminethrudis","Testament of Youth (disambiguation)","The Testament of Sister New Devil","The Testaments","Will and Testament (novel)","Will and Testament of \u02bbAbdu'l-Bah\u00e1","The Testament of Mary (play)","The Testament of Arkadia","The Testament (Grisham novel)","The Testament of Mary","The Testament (album)","The Testament of Freedom","The Testament of Dr. Mabuse (1962 film)","The Testament of Gideon Mack","The Testament of Athammaus","The Testament of Solomon","The Testament of William S.","Will and Testament of Baha'u'llah","The Testament (Lustbader novel)"],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["https://en.wikipedia.org/wiki/Testament","https://en.wikipedia.org/wiki/Testament_(band)","https://en.wikipedia.org/wiki/Testaments_of_the_Twelve_Patriarchs","https://en.wikipedia.org/wiki/Testament_of_Youth_(film)","https://en.wikipedia.org/wiki/Testament_of_Solomon","https://en.wikipedia.org/wiki/Testament_discography","https://en.wikipedia.org/wiki/Testament_(album)","https://en.wikipedia.org/wiki/Testament_of_Youth","https://en.wikipedia.org/wiki/Testament_of_Abraham","https://en.wikipedia.org/wiki/Testament_(1983_film)","https://en.wikipedia.org/wiki/Testament_(comics)","https://en.wikipedia.org/wiki/Testamentary_capacity","https://en.wikipedia.org/wiki/Testamentary_trust","https://en.wikipedia.org/wiki/Testament_(song)","https://en.wikipedia.org/wiki/Testament_m%C3%B3j","https://en.wikipedia.org/wiki/Testamentum_Domini","https://en.wikipedia.org/wiki/Testament_of_Job","https://en.wikipedia.org/wiki/Testament_of_Qahat","https://en.wikipedia.org/wiki/Testament_of_Boles%C5%82aw_III_Wrymouth","https://en.wikipedia.org/wiki/Testament_(video_game)","https://en.wikipedia.org/wiki/Testament:_The_Bible_in_Animation","https://en.wikipedia.org/wiki/Testament_of_Man","https://en.wikipedia.org/wiki/Testament_of_Ieyasu","https://en.wikipedia.org/wiki/Testament_of_Orpheus","https://en.wikipedia.org/wiki/Testament_of_Ba","https://en.wikipedia.org/wiki/Testament_of_Adam","https://en.wikipedia.org/wiki/Testament,_New","https://en.wikipedia.org/wiki/Testament_Records_(United_States)","https://en.wikipedia.org/wiki/Testament_of_Pope_Pius_XII","https://en.wikipedia.org/wiki/Testamentary_disposition","https://en.wikipedia.org/wiki/Testament_of_Youth_(TV_series)","https://en.wikipedia.org/wiki/Testament_(Guilty_Gear)","https://en.wikipedia.org/wiki/Testament_of_Isaac","https://en.wikipedia.org/wiki/Testament_and_Death_of_Moses","https://en.wikipedia.org/wiki/Testamentum_Dasumii","https://en.wikipedia.org/wiki/Testament,_Old","https://en.wikipedia.org/wiki/Testamentum_Flavianum","https://en.wikipedia.org/wiki/Testament_of_Jacob","https://en.wikipedia.org/wiki/Testament_and_will","https://en.wikipedia.org/wiki/Testament_(Xenosaga)","https://en.wikipedia.org/wiki/Testament_of_Charlemagne","https://en.wikipedia.org/wiki/Testament_Records_(UK)","https://en.wikipedia.org/wiki/Testament_Tour","https://en.wikipedia.org/wiki/Testament_of_Pope_John_Paul_II","https://en.wikipedia.org/wiki/Testament_of_Pope_Paul_VI","https://en.wikipedia.org/wiki/Testament_des_Dr._Mabuse,_Das","https://en.wikipedia.org/wiki/Testament_of_Hezekiah","https://en.wikipedia.org/wiki/Testament_Of_Sherlock_Holmes","https://en.wikipedia.org/wiki/Testamentary_adoption","https://en.wikipedia.org/wiki/Testament_to_Youth_in_Verse","https://en.wikipedia.org/wiki/Testament_of_Moses","https://en.wikipedia.org/wiki/Testament_of_Cresseid","https://en.wikipedia.org/wiki/Testament_de_M._Fortun%C3%A9_Ricard","https://en.wikipedia.org/wiki/Testament_(poem)","https://en.wikipedia.org/wiki/Testament_of_Rabbi_Israel_Baal_Shem","https://en.wikipedia.org/wiki/Testaments_of_the_Three_Patriarchs","https://en.wikipedia.org/wiki/Testament_(2004_film)","https://en.wikipedia.org/wiki/Testament_Newydd_ein_Arglwydd_Iesu_Christ","https://en.wikipedia.org/wiki/Testamentary","https://en.wikipedia.org/wiki/Testament_of_Peter_the_Great","https://en.wikipedia.org/wiki/Testament_Records","https://en.wikipedia.org/wiki/Testament_of_Erminethrudis","https://en.wikipedia.org/wiki/Testament_of_Youth_(disambiguation)","https://en.wikipedia.org/wiki/The_Testament_of_Sister_New_Devil","https://en.wikipedia.org/wiki/The_Testaments","https://en.wikipedia.org/wiki/Will_and_Testament_(novel)","https://en.wikipedia.org/wiki/Will_and_Testament_of_%CA%BBAbdu%27l-Bah%C3%A1","https://en.wikipedia.org/wiki/The_Testament_of_Mary_(play)","https://en.wikipedia.org/wiki/The_Testament_of_Arkadia","https://en.wikipedia.org/wiki/The_Testament_(Grisham_novel)","https://en.wikipedia.org/wiki/The_Testament_of_Mary","https://en.wikipedia.org/wiki/The_Testament_(album)","https://en.wikipedia.org/wiki/The_Testament_of_Freedom","https://en.wikipedia.org/wiki/The_Testament_of_Dr._Mabuse_(1962_film)","https://en.wikipedia.org/wiki/The_Testament_of_Gideon_Mack","https://en.wikipedia.org/wiki/The_Testament_of_Athammaus","https://en.wikipedia.org/wiki/The_Testament_of_Solomon","https://en.wikipedia.org/wiki/The_Testament_of_William_S.","https://en.wikipedia.org/wiki/Will_and_Testament_of_Baha%27u%27llah","https://en.wikipedia.org/wiki/The_Testament_(Lustbader_novel)"]]
});

// Mock response when don't show results
moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=testamentsdfgdfg&limit=80',{
  status: 200,
  response: ["testamentsdfgdfg",[],[],[]]
});

export default {
  title: 'Page/Search',
  component: Page
};

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
 location: {
   search: '?query=testament'
 }
};

export const NoResults = Template.bind({});
NoResults.args = {
 location: {
   search: '?query=testamentdvfgdfg'
 }
};

