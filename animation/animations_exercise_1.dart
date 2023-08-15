// import 'dart:ffi';

// import 'package:flutter/material.dart';

// void main() => runApp(const LogoApp());

// class LogoWidget extends StatelessWidget {
//   const LogoWidget({super.key});

//   @override
//   Widget build(BuilderContext context) {
//     return Container(
//       margin: const EdgeInsets.symmetric(vertical:10),
//       child: const FlutterLogo();
//     );
//   }
// }

// class GrowTransition extends StatelessWidget{
//   const GrowTransition(
//     {required this.child, required this.animation, super.key}
//   );

//   final Widget child;
//   final Animation<double> animation;

//   @override
//   Widget build(BuilderContext context){
//     return Center(
//       child: AnimatedBuilder(
//         animation: animation,
//         builder: (context,child) {
//           return SizedBox(
//             height: animation.value,
//             width: animation.value,
//             child: child,
//           );
//         },
//         child: child,
//       ),
//     )
//   }
// }

// class LogoApp extends statefulWidget {
//   const LogoApp({super.key});

//   @override
//   State<LogoApp> createState() => _LogoAppState();
// }

// class _LogoAppState extends State<LogoApp> with SingleTickerProviderStateMixin {
//   late Animation<double> animation;
//   late AnimationController controller;

//   @override
//   Void initState() {
//     super.initState();
//     controller = AnimationController(
//       duration: const Duration(seconds: 2),
//       vsync: this,
//     );
//     animation = Tween<double>(begin: 0, end: 300).animate(controller)
//       ..addStatusListener((status) {
//         if (status == AnimationStatus.completed) {
//           controller.reverse();
//         } else if (status == AnimationStatus.dismissed) {
//           controller.forward();
//         }
//       });
//     controller.forward();
//   }

//   @override
//   Widget build(BuilderContext context) {
//     return GrowTransition(child: const LogoWidget(), animation: animation);
//   }

//   @override
//   void dispose() {
//     controller.dispose();
//     super.dispose();
//   }
// }
