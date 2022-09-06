// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: o4t1y0SSs1
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
import Partner from "../../Partner"; // plasmic-import: Q4DFql2orP/component

import { useScreenVariants as useScreenVariants_68So83ItnbSuT } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 68So83itnbSuT/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicHeroSection.module.css"; // plasmic-import: o4t1y0SSs1/css

export type PlasmicHeroSection__VariantMembers = {};

export type PlasmicHeroSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroSection__VariantsArgs;
export const PlasmicHeroSection__VariantProps = new Array<VariantPropType>();

export type PlasmicHeroSection__ArgsType = {};
type ArgPropType = keyof PlasmicHeroSection__ArgsType;
export const PlasmicHeroSection__ArgProps = new Array<ArgPropType>();

export type PlasmicHeroSection__OverridesType = {
  root?: p.Flex<"section">;
  container?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  partner?: p.Flex<typeof Partner>;
};

export interface DefaultHeroSectionProps {
  className?: string;
}

function PlasmicHeroSection__RenderFunc(props: {
  variants: PlasmicHeroSection__VariantsArgs;
  args: PlasmicHeroSection__ArgsType;
  overrides: PlasmicHeroSection__OverridesType;

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
    <section
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
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__y6Nw)}>
          <div
            data-plasmic-name={"container"}
            data-plasmic-override={overrides.container}
            className={classNames(projectcss.all, sty.container)}
          >
            <div className={classNames(projectcss.all, sty.column__fbdc1)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"The Best Management Firm Any Crypto Investor Can Dream Of"}
              </h1>

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {
                  "Crypto investing becomes safer, easier and more effective for investors with exposure to the high-risk high-reward crypto market with a customized strategy by Professionals Digital Asset Manager"
                }
              </div>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qpWwS)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__olGvT)}
                    displayHeight={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("40px" as const)
                        : ("55px" as const)
                    }
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/cfund_landing_page/images/image19.png",
                      fullWidth: 799,
                      fullHeight: 230,
                      aspectRatio: undefined
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___1BrAw)}
                    displayHeight={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("40px" as const)
                        : ("55px" as const)
                    }
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/cfund_landing_page/images/image3.png",
                      fullWidth: 440,
                      fullHeight: 130,
                      aspectRatio: undefined
                    }}
                  />
                </p.Stack>
              ) : null}
            </div>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.column__seD5E)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__sqDXo)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__caxzT)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/cfund_landing_page/images/phonePlanetpng2.png",
                        fullWidth: 1081,
                        fullHeight: 1081,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>

          <Partner
            data-plasmic-name={"partner"}
            data-plasmic-override={overrides.partner}
            className={classNames("__wab_instance", sty.partner)}
          />
        </div>
      ) : null}
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container", "h1", "text", "partner"],
  container: ["container", "h1", "text"],
  h1: ["h1"],
  text: ["text"],
  partner: ["partner"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  container: "div";
  h1: "h1";
  text: "div";
  partner: typeof Partner;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroSection__VariantsArgs;
    args?: PlasmicHeroSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeroSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeroSection__ArgProps,
          internalVariantPropNames: PlasmicHeroSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeroSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection";
  } else {
    func.displayName = `PlasmicHeroSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection = Object.assign(
  // Top-level PlasmicHeroSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    partner: makeNodeComponent("partner"),

    // Metadata about props expected for PlasmicHeroSection
    internalVariantProps: PlasmicHeroSection__VariantProps,
    internalArgProps: PlasmicHeroSection__ArgProps
  }
);

export default PlasmicHeroSection;
/* prettier-ignore-end */
