// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: qVPSIM3pVs
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariants_68So83ItnbSuT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 68So83itnbSuT/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: qVPSIM3pVs/css

import TwitterSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__TwitterSvgrepoCom1Svg"; // plasmic-import: Yg-v2G06pB/icon
import InstagramSvgrepoComsvgIcon from "./icons/PlasmicIcon__InstagramSvgrepoComsvg"; // plasmic-import: UwifUUO_4c/icon
import TelegramSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__TelegramSvgrepoCom1Svg"; // plasmic-import: eA2qX4ZFE2/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  footerContainer?: p.Flex<"div">;
  footerColumn?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_68So83ItnbSuT()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"footerContainer"}
        data-plasmic-override={overrides.footerContainer}
        className={classNames(projectcss.all, sty.footerContainer)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"footerColumn"}
          data-plasmic-override={overrides.footerColumn}
          hasGap={true}
          className={classNames(projectcss.all, sty.footerColumn)}
        >
          <div className={classNames(projectcss.all, sty.column__zuNsm)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/cfund_landing_page/images/image17.png",
                fullWidth: 72,
                fullHeight: 72,
                aspectRatio: undefined
              }}
            />
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__oI5S)}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__qq74L
              )}
            >
              {"Sitemap"}
            </h4>

            <ul
              className={classNames(
                projectcss.all,
                projectcss.ul,
                sty.ul___9RnsO
              )}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li__yb0Ac
                )}
              >
                {"Peformance"}
              </li>
            </ul>

            <ul
              className={classNames(
                projectcss.all,
                projectcss.ul,
                sty.ul__bRk5U
              )}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li__vmmOt
                )}
              >
                {"How to"}
              </li>
            </ul>

            <ul
              className={classNames(
                projectcss.all,
                projectcss.ul,
                sty.ul__iHYz
              )}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li__e3BMu
                )}
              >
                {"Terms"}
              </li>
            </ul>

            <ul
              className={classNames(
                projectcss.all,
                projectcss.ul,
                sty.ul__cRNrt
              )}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li___7IDid
                )}
              >
                {"News"}
              </li>
            </ul>

            <ul
              className={classNames(
                projectcss.all,
                projectcss.ul,
                sty.ul__jsNt
              )}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li__wuQht
                )}
              >
                {"FAQ"}
              </li>
            </ul>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column___5Zi)}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__zyRjf
              )}
            >
              {"Disclaimer"}
            </h4>

            <ul
              className={classNames(
                projectcss.all,
                projectcss.ul,
                sty.ul__reHdA
              )}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li__kPgEp
                )}
              >
                {"Terms & Condition"}
              </li>
            </ul>

            <ul
              className={classNames(
                projectcss.all,
                projectcss.ul,
                sty.ul__o0AZ
              )}
            >
              <li
                className={classNames(
                  projectcss.all,
                  projectcss.li,
                  projectcss.__wab_text,
                  sty.li___3XUyx
                )}
              >
                {"Privacy Policy"}
              </li>
            </ul>
          </p.Stack>

          <div className={classNames(projectcss.all, sty.column__dCqJ)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__gvbcp
              )}
            >
              {"Social Media"}
            </h4>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__jWOiU)}
            >
              <TwitterSvgrepoCom1SvgIcon
                className={classNames(projectcss.all, sty.svg__wwpP1)}
                role={"img"}
              />

              <InstagramSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__kFe0)}
                role={"img"}
              />

              <TelegramSvgrepoCom1SvgIcon
                className={classNames(projectcss.all, sty.svg__gOcOw)}
                role={"img"}
              />
            </p.Stack>
          </div>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__lpQdq)}>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"© 2022 PT Cuma Untuk Anak Negeri, All Rights Reserved"}
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "footerContainer", "footerColumn", "img", "text"],
  footerContainer: ["footerContainer", "footerColumn", "img", "text"],
  footerColumn: ["footerColumn", "img"],
  img: ["img"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  footerContainer: "div";
  footerColumn: "div";
  img: typeof p.PlasmicImg;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    footerContainer: makeNodeComponent("footerContainer"),
    footerColumn: makeNodeComponent("footerColumn"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */