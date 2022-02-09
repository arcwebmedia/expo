import React, { Component } from 'react';

import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    FlatList,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#28293e' }}>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row', height: 100, width: '90%', justifyContent: 'space-between',
                        alignSelf: 'center', alignItems: 'center',
                    }}>
                        <View style={{ height: 60, width: 130, alignItems: 'center' }}>
                            <Image style={{ height: 40, width: 40, }} source={require('./assets/search.png')} />
                            <Image style={{ height: 20, width: 100, }} source={require('./assets/text.png')} />
                        </View>
                        <TouchableOpacity>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: 'white',
                                height: 60, width: 60, borderRadius: 10
                            }}>
                                <Image style={{ height: 25, width: 25, }} source={require('./icons/menu.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', height: 350, width: '100%', }} >
                        <Image style={{ height: 350, width: '100%', }} source={require('./assets/friends.png')} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>New Friend</Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Groups</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, flexDirection: 'row' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/play.png')} />
                        <Text style={{ color: '#F1C40F', fontSize: 17, marginLeft: 10 }}>PLAY NOW</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>Hide&Seek is designed to automatically</Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>create new friend groups.It Works on the </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>premise of asimple bar game to interact </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>with many new people at once.After you </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>have met and scanned somebody's QR </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>code, we wait for a confirmed </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>connection.After a confirmed </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>connection is created,we automatically </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>assign you to group chat for shared </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>connections. We also suggest activites </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>for your new group periodically that you </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>can RSVP to.This takes away the work of </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>Schedulling activites with your new friend </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}> friends.</Text>
                    </View>
                    <TouchableOpacity style={{
                        height: 60, width: '80%', backgroundColor: '#ED0058', alignSelf: 'center', marginTop: 20,
                        justifyContent: 'center', alignItems: 'center', borderRadius: 30, elevation: 10,
                        shadowColor: '#d12855',
                        shadowOffset: { height: 10, width: 10 },
                        shadowOpacity: 5,
                        shadowRadius: 5,
                    }}
                    >
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Instagram Paywall Paid </Text>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}> pubilc Appearences</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity>
                            <Image style={{ height: 80, width: 80, }} source={require('./icons/QR.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginTop: 10 }}>Scan My QR Code</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>

                        <TouchableOpacity>
                            <Image style={{ height: 80, width: 80, }} source={require('./icons/refferal.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginTop: 10 }}>$5 Referral bonus for each user</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image style={{ height: 350, width: '100%', }} source={require('./assets/Image.png')} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'white', fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>HIDE & SEEK</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#CE1D5A', fontSize: 13, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#CE1D5A' }}>HIDE AND SEEK - YOUR SOCIAL</Text>
                        <Text style={{ color: '#CE1D5A', fontSize: 13, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#CE1D5A' }}>FANBASE</Text>
                    </View>

                    <View style={{
                        justifyContent: 'center', marginTop: 20, borderWidth: 1, borderTopLeftRadius: 10, padding: 10,
                        borderColor: 'white', height: 150, width: '90%', alignSelf: 'center', borderTopRightRadius: 10
                    }}>
                        <View style={{ marginTop: 10, flexDirection: 'row', }}>
                            <Image style={{ height: 25, width: 25, }} source={require('./icons/ok.png')} />
                            <Text style={{ color: 'white', fontSize: 17, marginLeft: 10 }}>Play To Win Cash Prizes</Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image style={{ height: 25, width: 25, }} source={require('./icons/ok.png')} />
                            <Text style={{ color: 'white', fontSize: 17, marginLeft: 10 }}>Play To Meet New People</Text>
                        </View>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <Image style={{ height: 25, width: 25, }} source={require('./icons/ok.png')} />
                            <Text style={{ color: 'white', fontSize: 17, marginLeft: 10 }}>Play To Promote Your Instagram</Text>
                        </View>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>You found us, so lets play this</Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>weekend.More than 1 Million people  </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>around the world already sharing the </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 17, }}>same experience. </Text>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>See what you can</Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>do with</Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>HIDE & SEEK</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >
                        <Image style={{ height: 350, width: '100%', }} source={require('./assets/pic1.png')} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#CE1D5A', fontSize: 17, }}>NUMEROUS FEATURE MAKE IT POSSIBLE</Text>
                        <Text style={{ color: '#CE1D5A', fontSize: 17, }}>TO CUSTOMIZE THE SYSTEM IN</Text>
                        <Text style={{ color: '#CE1D5A', fontSize: 17, }}>ACCORDANCE WITH ALL YOUR NEEDS</Text>
                    </View>

                    <View style={{ marginTop: 50, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Go To Web App</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Upload a photo so people can recognise you on
                            the night </Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Update your venue name as you move
                            throughout the night</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Look for people in the same venue as you
                            with matching photo</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Help locate people through group chat for all
                            participants in the same venue</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>If you recognise a participant ask to scan their QR
                            code provided in the app</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Cash prize is distributed at end of the night according to number
                            of points you have</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Add people to your connection list through mutual
                            match process the next morning</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ marginTop: 10, flexDirection: 'row', alignSelf: 'center', width: '80%', alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 25, }} source={require('./assets/ok.png')} />
                        <Text style={{ color: '#CCCCCC', fontSize: 17, marginLeft: 10 }}>Host public appearances for your fanbase</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: '80%', borderColor: 'white', alignSelf: 'center', marginTop: 10 }}></View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>YOUR NEXT PUBLIC</Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>APPEARANCE</Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>TELL OTHER PLAYERS </Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>WHAT VENUE YOU ARE AT </Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#CE1D5A', fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#CE1D5A' }}>LET YOUR FANS UNLOCK YOUR
                            NEXT</Text>
                        <Text style={{ color: '#CE1D5A', fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#CE1D5A' }}>PUBLIC APPEARANCE</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}>ENTERTAIN YOUR FANS WITH YOUR LIVELY </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}>PERSONALITY, SCAN THEIR QR CODE.  </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}>SHOW YOUR FANS A FUN TIME BY </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}> SOCIALIZING WITH THEM AND LETTING YOUR </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}> FANS SOCIALIZE WITH EACH OTHER. </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}>MAKE SURE YOUR FANS HAVE A FUN NIGHT  </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}>WITH DRINKS AND EPIC CONVERSATION SO  </Text>
                        <Text style={{ color: '#CCCCCC', fontSize: 15, }}>THEY STAY LOYAL. </Text>
                    </View>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 250, width: '100%',
                        backgroundColor: '#51536B',
                    }} >
                        <Image style={{ height: 300, width: '98%', }} source={require('./assets/img1.png')} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>TOP FEATURES</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                        <Text style={{ color: '#CE1D5A', fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#CE1D5A' }}>HIDE AND SEEK - YOUR SOCIAL </Text>
                        <Text style={{ color: '#CE1D5A', fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#CE1D5A' }}>FANBASE</Text>
                    </View>

                    <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexDirection: 'row', width: '80%', alignSelf: 'center' }}>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 150, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#FF7675', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10 }}>
                                Socialize With Your Fanbase At Public Venues</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 150, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#00B894', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon1.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                                Go To The Webapp</Text>
                        </View>

                    </View>

                    <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexDirection: 'row', width: '80%', alignSelf: 'center' }}>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 150, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#DB488A', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon2.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                                Post Your Public Profile On Social Media</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 150, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#74B9FF', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon3.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                                Create / Update Your Public Appearances For Fans To Unlock</Text>
                        </View>

                    </View>

                    <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexDirection: 'row', width: '80%', alignSelf: 'center' }}>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 150, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#6C5CE7', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon4.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                                Group Chat With People In The Same Venue
                            </Text>
                        </View>

                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 150, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#F5955F', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon5.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                                Scan their QR code</Text>
                        </View>

                    </View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 10, flexDirection: 'row', width: '80%', alignSelf: 'center' }}>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 120, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#2A9FFA', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon6.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                                Win Cash Prizes By Scanning QR Codes
                            </Text>
                        </View>

                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 120, width: 120,

                        }} >
                            <View style={{ height: 60, width: 60, backgroundColor: '#BC57EC', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <Image style={{ height: 30, width: 30, }} source={require('./icons/icon7.png')} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15, marginTop: 10, textAlign: 'center' }}>
                                Confirm Connections With New Fans</Text>
                        </View>

                    </View>

                    <View style={{ height: 1100, width: '100%', backgroundColor: '#DB488A', marginTop: 40, borderTopRightRadius: 100, borderBottomLeftRadius: 50 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Make friends </Text>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>with the people</Text>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>you see</Text>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>everyday</Text>
                        </View>

                        <View style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20, height: 400, width: '100%',
                            backgroundColor: '#F375AD',
                        }} >
                            <Image style={{ height: 300, width: '100%', }} source={require('./assets/img2.png')} />

                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                                <Text style={{ color: '#28293E', fontSize: 17, fontWeight: 'bold' }}>ONLY PLAY AT PUBLIC SPACES LIKE </Text>
                                <Text style={{ color: '#28293E', fontSize: 17, fontWeight: 'bold' }}>COLLEGES / BARS / CLUBS </Text>

                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                            <Text style={{ color: 'white', fontSize: 17, }}>HideAndSeek is designed for safe quick</Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>interactions that at most involve  </Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>introducing yourself and scanning  </Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>with many new people at once.After you </Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>another player's QR Code.</Text>

                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                            <Text style={{ color: 'white', fontSize: 17, }}>The aim is to meet as many new people in </Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>a short time as possible. The aim is not to  </Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>start a long conversation, that comes </Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>with many new people at once.After you </Text>
                            <Text style={{ color: 'white', fontSize: 17, }}>later for confirmed connections.</Text>

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Increase your social </Text>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>circle by meeting people   </Text>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}> at public appearances  </Text>

                        </View>

                        <TouchableOpacity style={{
                            height: 60, width: '60%', backgroundColor: '#28293E', alignSelf: 'center', marginTop: 20,
                            justifyContent: 'center', alignItems: 'center', borderRadius: 30, elevation: 10,

                        }}
                        >
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>PLAY NOW </Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Our app is  </Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>available now </Text>
                    </View>

                    <View style={{ justifyContent: 'center', height: 450, width: '100%', marginTop: 30 }} >
                        <Image style={{ height: 430, width: '100%', }} source={require('./assets/mobile.png')} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                        <Text style={{ color: 'white', fontSize: 17, }}>We have events that run every weekend</Text>
                        <Text style={{ color: 'white', fontSize: 17, }}>in your city. Download the app and join an  </Text>
                        <Text style={{ color: 'white', fontSize: 17, }}>event to win cash prizes. See what other </Text>
                        <Text style={{ color: 'white', fontSize: 17, }}>venues players are currently at. </Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 30, flexDirection: 'row', width: '90%', alignSelf: 'center' }}>
                        <Image style={{ height: 40, width: '49%', }} source={require('./assets/googlePlay.png')} />
                        <Image style={{ height: 40, width: '49%', }} source={require('./assets/AppStore.png')} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>We host</Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>promotional </Text>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>events </Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#CE1D5A', fontSize: 17, }}>Don’t hesitate to contact us for any kind </Text>
                        <Text style={{ color: '#CE1D5A', fontSize: 17, }}>of information</Text>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Image style={{ height: 60, width: 60, }} source={require('./icons/icon8.png')} />
                        <Text style={{ color: 'white', fontSize: 17, marginTop: 10 }}>970 N. Bay Meadows Drive </Text>
                        <Text style={{ color: 'white', fontSize: 17, }}> Fremont, OH 43420</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Image style={{ height: 60, width: 60, }} source={require('./icons/icon9.png')} />
                        <Text style={{ color: 'white', fontSize: 17, marginTop: 10 }}>support@hideandseek.com</Text>
                    </View>

                    <View style={{ height: 430, width: '100%', backgroundColor: 'white', marginTop: 40, borderRadius: 10 }}>
                        <Text style={{ color: 'black', fontSize: 25, marginTop: 20, fontWeight: 'bold', marginLeft: 10 }}>
                            Please write us ! </Text>
                        <TextInput style={{
                            height: 60, width: '80%', alignSelf: 'center', marginTop: 20, borderRadius: 10, paddingLeft: 20,
                            fontSize: 17, borderWidth: 0.5, borderColor: '#CCCCCC'
                        }}
                            placeholder='Name'
                            placeholderTextColor='gray'>
                        </TextInput>

                        <TextInput style={{
                            height: 60, width: '80%', alignSelf: 'center', marginTop: 20, borderRadius: 10, paddingLeft: 20, color: 'black',
                            fontSize: 17, borderWidth: 0.5, borderColor: '#CCCCCC',
                        }}
                            placeholder='Email'
                            placeholderTextColor='gray'>
                        </TextInput>


                        <View style={{
                            height: 100, width: '80%', alignSelf: 'center', marginTop: 20, borderRadius: 10, paddingLeft: 20, color: 'black',
                            fontSize: 17, borderWidth: 0.5, borderColor: '#CCCCCC'
                        }}>
                            <Text style={{ fontSize: 17, marginTop: 10, color: 'gray' }}>Messege</Text>
                        </View>



                        <TouchableOpacity style={{
                            height: 50, width: '50%', backgroundColor: '#ED0058', marginTop: 20, alignSelf: 'flex-end',
                            justifyContent: 'center', alignItems: 'center', borderRadius: 40, elevation: 8, marginRight: 40, marginTop: 20
                        }}
                        >
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>SEND</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ justifyContent: 'space-between', alignItems: 'center', marginTop: 100, flexDirection: 'row', width: '100%', alignSelf: 'center' }}>
                        <Image style={{ height: 200, width: '50%', }} source={require('./assets/1.png')} />
                        <Image style={{ height: 200, width: '50%', }} source={require('./assets/2.png')} />
                    </View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%', alignSelf: 'center' }}>
                        <Image style={{ height: 200, width: '50%', }} source={require('./assets/3.png')} />
                        <Image style={{ height: 200, width: '50%', }} source={require('./assets/4.png')} />
                    </View>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%', alignSelf: 'center' }}>
                        <Image style={{ height: 200, width: '50%', }} source={require('./assets/5.png')} />
                        <Image style={{ height: 200, width: '50%', }} source={require('./assets/6.png')} />
                    </View>

                    <Text style={{ color: 'white', fontSize: 17, alignSelf: 'center', marginTop: 50, marginBottom: 50 }}>Copyright © Hide and Seek </Text>

                </ScrollView>



            </SafeAreaView>
        )
    }
}